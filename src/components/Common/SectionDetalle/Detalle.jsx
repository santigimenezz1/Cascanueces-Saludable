import { useContext, useEffect, useState } from "react";
import { db } from "../../../FirebaseConfig";
import "../SectionDetalle/detalle.css";
import FormasPago from "../SectionHome/FormasPago/FormasPago";
import TarjetaHover from "../SectionHome/TarjetasHover/TarjetaHover";
import ContadorUnidades from "./ContadorUnidades/ContadorUnidades";
import {
  getDoc,
  collection,
  doc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { CartContext } from "../../../Context/CartContext";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const Detalle = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [filtrado, setFiltrado] = useState([]);
  const { addToCart } = useContext(CartContext);

  const filtradoCategoriaId = (categoria) => {
    let productsColeccion = collection(db, "products");
    let consulta = query(
      productsColeccion,
      where("categoria", "==", categoria)
    );
    getDocs(consulta).then((res) => {
      let producto = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setFiltrado(producto);
    });
  };

  useEffect(() => {
    //PETICION SEGUN EL ID
    let productsColeccion = collection(db, "products");
    let productRef = doc(productsColeccion, id);
    getDoc(productRef).then((res) => {
      let producto = { ...res.data(), id: res.id };
      setData(producto);
      filtradoCategoriaId(producto.categoria);
    });
  }, [id]);

  const onAdd = (cantidad = 1) => {
    let productCart = { ...data, cantidad: cantidad };
    addToCart(productCart);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: true,
      timer: 1500,
    });
  };

  return (
    <>
      <div className="detalle">
        <div className="detalle__containerTarjetaDetalle">
          <div className="detalle__imagen">
            {Object.keys(data).length > 0 ? (
              <img className="imagen_detalle" src={data.imagenPrincipal}></img>
            ) : (
              <div className="detalle__imagen__esqueleton">
                <Skeleton variant="rectangular" width={400} height={450} />
              </div>
            )}
          </div>
          {Object.keys(data).length > 0 ? (
            <>
              <div className="detalle__info">
                <h1 className="detalle__info__titulo">{data.nombre}</h1>
                <h1 className="detalle__info__precio">${data.precio}</h1>
                <div className="detalle__info__caracteristicas">
                  <h2 className="detalle__info__caracteristicas">
                    {data.caracteristica1}
                  </h2>
                  <h2 className="detalle__info__caracteristicas">
                    {data.caracteristica2}
                  </h2>
                </div>

                <div className="detalle__info__contadorUnidades">
                  {data.stock > 0 ? (
                    <>
                      <h2 className="detalle__info__stock">
                        {" "}
                        cantidad disponible: {data.stock}
                      </h2>
                      <ContadorUnidades
                        initial={1}
                        stock={data.stock}
                        onAdd={onAdd}
                      />
                    </>
                  ) : (
                    <h1 className="detalle__sinStock__titulo">Sin stock</h1>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className={"detalle__info__esqueleton"}>
              <div className={"detalle__info__esqueleton__caja1"}>
                <Skeleton variant="text" width={200} height={25} />
                <Skeleton variant="text" width={70} height={45} />
                <Skeleton variant="text" width={200} height={25} />
                <Skeleton variant="text" width={200} height={25} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alingItems: "center",
                  flexDirection: "column",
                }}
              >
                <Skeleton variant="text" width={200} height={25} />
                <Skeleton variant="text" width={120} height={25} />
                <Skeleton variant="text" width={150} height={80} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="detalle__tarjetaProductos">
        {Object.keys(filtrado).length > 0 ? (
          filtrado.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} onAdd={onAdd} />
          ))
        ) : (
          <>
            <Skeleton variant="rectangular" width={280} height={400} />
            <Skeleton variant="rectangular" width={280} height={400} />
            <Skeleton variant="rectangular" width={280} height={400} />
            <Skeleton variant="rectangular" width={280} height={400} />
          </>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormasPago />
      </div>
    </>
  );
};

export default Detalle;
