import "../TarjetaCart/tarjetaCart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ContadorUnidades from "../../SectionDetalle/ContadorUnidades/ContadorUnidades";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../../../Context/CartContext";
import { CSSTransition } from "react-transition-group";

const TarjetaCart = ({ producto }) => {
  const { cart, deleteCart, addToCart } = useContext(CartContext);
  let totalTarjeta = producto.cantidad * producto.precio;
  const [isRemoved, setIsRemoved] = useState(false); // Estado para controlar si se ha eliminado la tarjeta

  const mostrarPrecioConFormato = (precio, cantidad) => {
    // Cambiar formato del precio
    let total = precio * cantidad;
    return total.toLocaleString("es-ES");
  };

  const onAdd = (valor) => {
    let productCart = { ...producto, cantidad: valor };
    addToCart(productCart);
  };

  const agregarUnidad = (valor) => {
    let nuevo = valor + 1;
    onAdd(nuevo);
  };

  const quitarUnidad = (valor) => {
    let nuevo = valor > 1 ? valor - 1 : 1;
    onAdd(nuevo);
  };

  const handleDeleteClick = () => {
    // Marcamos la tarjeta como eliminada
    setIsRemoved(true);

    // Luego de una animación o tiempo, puedes eliminarla del carrito.
    setTimeout(() => {
      deleteCart(producto.id);
    }, 500); // Ajusta el tiempo de acuerdo a tu animación
  };

  return (
    <CSSTransition
      in={!isRemoved}
      timeout={500} // Ajusta el tiempo de acuerdo a tu animación
      classNames="fade" // Nombre de la clase CSS para la animación
      unmountOnExit
    >
      <div className="container-terminarCompraCart">
        <div className="delete__mobile">
          <DeleteForeverIcon
            fontSize="small"
            className="icon-trash"
            onClick={handleDeleteClick}
          />
        </div>

        <div className="container-tituloImageCart">
          <span className="span"></span>
          <Link to={`/detalle/${producto.id}`}>
            <img
              className="terminarCompra-imageCart "
              src={producto.imagenPrincipal}
            ></img>
          </Link>
          <h1 className="terminarCompra-title">{producto.nombre}</h1>

          <div className="cart-mobile">
            <DeleteForeverIcon fontSize="small" className="icon-trash" />
          </div>
        </div>

        <div className="container-contadorCart">
          <ContadorUnidades
            stock={producto.stock}
            initial={producto.cantidad}
            agregarUnidad={agregarUnidad}
            quitarUnidad={quitarUnidad}
          />

          <h2 className="precio-tarjetaCart">
            ${mostrarPrecioConFormato(producto.precio, producto.cantidad)}
          </h2>
          <div className="deleteCartTrash" onClick={handleDeleteClick}>
            <DeleteForeverIcon className="icon-trashCart" />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default TarjetaCart;
