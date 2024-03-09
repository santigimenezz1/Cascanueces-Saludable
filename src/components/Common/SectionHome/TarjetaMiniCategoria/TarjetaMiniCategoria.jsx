import "../TarjetaMiniCategoria/tarjetaMiniCategoria.css";

const TarjetaMiniCategoria = ({ imagen, titulo }) => {
  return (
    <div className="tarjetaMiniCategoria">
      <div className="tarjetaMiniCategoria__imagenContainer">
        <img
          className="tarjetaMiniCategoria__imagen"
          src={imagen}
          alt={titulo}
        />
      </div>
      <h1 className="tarjetaMiniCategoria__titulo">{titulo}</h1>
    </div>
  );
};

export default TarjetaMiniCategoria;
