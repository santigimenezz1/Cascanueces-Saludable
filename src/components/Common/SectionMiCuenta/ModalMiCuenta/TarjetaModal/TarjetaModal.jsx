import "../TarjetaModal/tarjetaModal.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";

const TarjetaModal = ({ producto }) => {
  const mostrarPrecioConFormato = (precio, cantidad) => {
    //cambiar formato del precio
    let total = precio * cantidad;
    return total.toLocaleString("es-ES");
  };

  return (
    <div className="container-terminarCompraMiCuenta">
      <div className="container-tituloImage">
        <span className="span"></span>
        <Link to={`/detalle/${producto.id}`}>
          <img
            className="terminarCompra-image"
            src={producto.imagenPrincipal}
          ></img>
        </Link>
        <div className="container__nombrePrecioMobile">
        <h1 className="terminarCompra-title">{producto.nombre}</h1>
        <h1>
        ${mostrarPrecioConFormato(producto.precio, producto.cantidad)}
        </h1>
        
        </div>
        <div className="cart-mobile">
          <DeleteForeverIcon fontSize="small" className="icon-trash" />
        </div>
      </div>

      <div className="container-contador">
        <h2 className="precio-tarjetaCartMobile">
          ${mostrarPrecioConFormato(producto.precio, producto.cantidad)}
        </h2>
      </div>
    </div>
  );
};
export default TarjetaModal;
