import "../TarjetaCategoria/tarjetaCategoria.css";

const TarjetaCategoria = ({ imagen, titulo }) => {
  return (
    <div className="tarjetaCategoria">
      <img className="tarjetaCategoria__imagen" src={imagen}></img>
      <div className="tarjetaCategoria__info">
        <h1 className="tarjetaCategoria-info__texto">{titulo}</h1>
        <button className="tarjetaCategoria-info__boton">VER</button>
      </div>
    </div>
  );
};

export default TarjetaCategoria;
