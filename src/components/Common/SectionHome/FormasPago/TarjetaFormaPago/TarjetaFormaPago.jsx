import "../TarjetaFormaPago/TarjetaFormaPago.css";
const TarjetaFormaPago = ({ imagen, titulo }) => {
  return (
    <div className="formasPago">
      <img className="formasPago__imagen" src={imagen}></img>
      <h2 className="formasPago__titulo">{titulo}</h2>
    </div>
  );
};

export default TarjetaFormaPago;
