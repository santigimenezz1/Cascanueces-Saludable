import { useEffect, useState } from "react";
import "../SectionCategory/categoria.css";
import EnlacesCategoria from "./EnlacesCategoria/EnlacesCategoria";
import TarjetaHoverCategoria from "./TarjetaCategory/TarjetaCategory";
import { db } from "../../../FirebaseConfig";
import {
  collection,
  onSnapshot, // Importa onSnapshot para escuchar cambios en tiempo real
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import Filtros from "./Filtros/Filtros";
import EnlacesResponsive from "./EnlacesResponsive/EnlacesResponsive";
import AgregarImagen from "../AgregarImagen/AgregarImagen";

const Categoria = () => {
  const [data, setData] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consulta;
    if (categoria) {
      consulta = query(productsCollection, where("categoria", "==", categoria));
    } else {
      consulta = productsCollection;
    }

    // Crea un oyente en la consulta para obtener datos en tiempo real
    const unsubscribe = onSnapshot(consulta, (querySnapshot) => {
      const productos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(productos);
    });

    // Devuelve una función de limpieza para detener el oyente cuando el componente se desmonta
    return () => unsubscribe();
  }, [categoria]);

  const mayorMenor = (data) => {
    setData([...data].sort((a, b) => a.precio - b.precio));
  };

  const menorMayor = (data) => {
    setData([...data].sort((a, b) => b.precio - a.precio));
  };

  const filtrarEstado = (valor) => {
    const filtrado = data.filter((producto) => valor === producto.nombre);
    setData(filtrado);
  };

  return (
    <div className="categoria">
      <div className="categoria__enalcesCategoria">
        <EnlacesResponsive />
        <EnlacesCategoria filtro={data} filtrarEstado={filtrarEstado} data={data} />
      </div>
      <div className="categoria__tarjetaProductos">
        <h1>{categoria}</h1>
        <div className="categoria__tarjetaProductos__filtros">
          <h2>Mostrar resultados: {data.length}</h2>
          <Filtros mayorMenor={mayorMenor} menorMayor={menorMayor} newData={data} />
        </div>

        <div className="categoria__tarjetaProductos__tarjetas">
          {data.length > 0 ? (
            data.map((producto) => (
              <TarjetaHoverCategoria key={producto.id} producto={producto} />
            ))
          ) : (
            <>
              {Array(12).fill().map((_, index) => (
                <Skeleton key={index} variant="rectangular" width={220} height={350} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categoria;
