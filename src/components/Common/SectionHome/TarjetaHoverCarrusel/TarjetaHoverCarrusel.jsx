import { useContext, useState } from "react";
import "../TarjetaHoverCarrusel/tarjetaHoverCarrusel.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../../../../Context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TarjetaHoverCarrusel = ({ imagenPrincipal, imagenSecundaria, producto }) => {
  const [imagen, setImagen] = useState(producto.imagenPrincipal);
  const { addToCart } = useContext(CartContext);
  const fotoPrincipal = producto.imagenPrincipal;
  const fotoSecundaria = producto.imagenSecundaria;
  const {
    favorito,
    setFavorito,
    addFavorito,
    eliminarFavorito,
    existFavorito,
  } = useContext(CartContext);
  const [corazon, setCorazon] = useState(false);

  const onAdd = (cantidad = 1) => {
    let productCart = { ...producto, cantidad: cantidad };
    addToCart(productCart);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: true,
      timer: 1500,
    });
  };
  const agregando = (producto) => {
    addFavorito(producto);
  };

  return (
    <div onMouseOver={() => setImagen(fotoSecundaria)} className="tarjetaHoverCarrusel">
      <Link to={`/detalle/${producto.id}`}>
        <img
          onMouseOut={() => setImagen(fotoPrincipal)}
          className={
            producto.stock > 0
              ? "tarjetaHover__imagen"
              : "tarjetaHover__imagen sinStock"
          }
          src={imagen}
        ></img>
      </Link>
      {producto.stock > 0 ? (
        <>
          <div className="tarjetaHover__icono">
            <AddShoppingCartIcon fontSize="medium" />
          </div>
          <div onClick={() => onAdd()} className="tarjetaHover__icono">
            <AddShoppingCartIcon fontSize="medium" />
          </div>
        </>
      ) : (
        <h1 className="tarjeta__hover__sinStock">Sin stock</h1>
      )}
      <div
        onClick={() => setCorazon(!corazon)}
        className="tarjetaHover__corazon"
      >
        {corazon ? (
          <div
            onClick={() => eliminarFavorito(producto.id)}
            className="tarjetaHover__corazon true"
          >
            <FavoriteIcon />
          </div>
        ) : (
          <div
            onClick={() => agregando(producto)}
            className="tarjetaHover__corazon "
          >
            {" "}
            <FavoriteBorderIcon />
          </div>
        )}
      </div>
      <div className="tarjetaHover__nombrePrecio">
        <h3>Crema de almendras 500g</h3>
        <h3>$2.500</h3>
      </div>
    </div>
  );
};

export default TarjetaHoverCarrusel;
