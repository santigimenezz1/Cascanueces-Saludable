import { Link } from "react-router-dom";
import "../SectionMiCuenta/miCuenta.css";
import WestIcon from "@mui/icons-material/West";
import ModalCart from "../SectionCart/Modal/Modal";
import { useContext, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { object } from "yup";
import ModalMiCuenta from "./ModalMiCuenta/ModalMiCuenta";
import { CartContext } from "../../../Context/CartContext";
import { db } from "../../../FirebaseConfig";

const MiCuenta = () => {
  const [ordenCompra, setOrdenCompra] = useState([]);
  const { user, setUser, usuarioOn } = useContext(CartContext);
  const [logeado, setLogeado] = useState(user);

  const mostrarPrecioConFormato = (precio) => {
    //FUNCION PARA PONERLE EL PUNTO A LOS PRECIOS
    return precio.toLocaleString("es-ES");
  };

  useEffect(() => {
    setLogeado(!user);
  }, [user]);

  useEffect(() => {
    let orden = collection(db, `${user.email}`);
    getDocs(orden).then((res) => {
      let producto = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setOrdenCompra(producto);
    });
  }, [ordenCompra]);

  const eliminarOrden = async (productoId) => {
    try {
      const docRef = doc(db, `${user.email}`, productoId);
      await deleteDoc(docRef);
    } catch (error) {
      
    }
  };

  return (
    <div className="cuenta">
      <div className="cuenta__retroceso">
        <h1>Mi cuenta</h1>
        <Link to={"/"}>
          <WestIcon fontSize="medium" />
        </Link>
      </div>
      <div className="cuenta__reservas">
        {usuarioOn === true ? (
          <div className="cuenta__reservas__tituloImagen">
            <img src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692382818/CASCANUCES%20SALUDABLE/carrito-de-compras_v2cfi7.png"></img>
            <h1>Tus reservas</h1>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "400px",
            }}
          >
            <h2 className="subtitulo__miCuenta">
             Inicia sesión para ver el contenido
            </h2>
          </div>
        )}

        {Object.keys(ordenCompra).length > 0 &&
          usuarioOn &&
          ordenCompra.map((producto) => (
            <>
              <div className="container__reserva" key={producto.id}>
                <div className="cuenta__reservas__container-reserva">
                  <h1 className="fontf"> N reserva: {producto.id}</h1>
                  <h1 className="fontf">
                    {" "}
                    Fecha:{" "}
                    {new Date(producto.date.toDate()).toLocaleDateString()}{" "}
                  </h1>
                  <h1 className="fontf">
                    {" "}
                    Monto: {mostrarPrecioConFormato(producto.total)}
                  </h1>
                  <div className="container__buttonReserva">
                    <div className="container__buttonReserva">
                      <ModalCart
                        eliminarOrden={eliminarOrden}
                        producto={producto}
                        nombreBoton={"CANCELAR RESERVA"}
                        titulo={"aviso"}
                        subtitulo={"¿Seguro que quieres eliminar la reserva?"}
                      />
                      <ModalMiCuenta producto={producto} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default MiCuenta;
