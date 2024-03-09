import "../TarjetaProductoCategoria/tarjetaProductoCategoria.css";

const TarjetaProductoCategoria = ({ imagen, nombre, precio }) => {
  return (
    <div className="tarjetaProductoCategoria">
      <div className="tarjetaProducto__imagenProducto">
        <img src={imagen}></img>
      </div>
      <div className="tarjetaProducto__tituloProducto">
        <h3>{nombre}</h3>
        <h4>${precio}</h4>
      </div>
      <button className="tarjetaProducto__boton">Agregar al carrito</button>
    </div>
  );
};

export default TarjetaProductoCategoria;
