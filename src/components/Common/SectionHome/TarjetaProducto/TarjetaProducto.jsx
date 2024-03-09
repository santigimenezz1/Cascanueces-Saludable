import "../TarjetaProducto/tarjetaProducto.css";

const TarjetaProducto = ({ imagen, nombre, precio }) => {
  return (
    <div className="tarjetaProducto">
      <div className="tarjetaProducto__imagen">
        <img src={imagen}></img>
      </div>
      <div className="tarjetaProducto__titulo">
        <h3>{nombre}</h3>
        <h4>${precio}</h4>
      </div>
      <button className="tarjetaProducto__boton">Agregar al carrito</button>
    </div>
  );
};

export default TarjetaProducto;
