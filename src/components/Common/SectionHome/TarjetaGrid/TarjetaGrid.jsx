import "../TarjetaGrid/TarjetaGrid.css";

const TarjetaGrid = ({ imagen, titulo }) => {
  return (
    <div className="tarjetaGrid">
      <div className="tarjetaMiniCategoria__imagenContainer">
        <img
          className="tarjetaMiniCategoria__imagen"
          src={imagen}
          alt={titulo}
        />
      </div>
      <h1 className="tarjetaGrid__titulo">{titulo}</h1>
    </div>
  );
};

export default TarjetaGrid;
