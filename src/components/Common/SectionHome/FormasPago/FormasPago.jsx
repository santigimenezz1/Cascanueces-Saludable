import "../FormasPago/FormasPago.css";
import TarjetaFormaPago from "./TarjetaFormaPago/TarjetaFormaPago";
const FormasPago = () => {
  return (
    <div className="home__formasPago">
      <TarjetaFormaPago
        titulo={"ENVIAMOS O RETIRAS"}
        imagen={
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691604411/CASCANUCES%20SALUDABLE/camion-de-reparto_1_t0y1u2.png"
        }
      />
      <TarjetaFormaPago
        titulo={"PAGÁ COMO QUIERAS"}
        imagen={
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691604411/CASCANUCES%20SALUDABLE/pago_1_u7oyfs.png"
        }
      />
      <TarjetaFormaPago
        titulo={"CONSULTANOS"}
        imagen={
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691604411/CASCANUCES%20SALUDABLE/chat_aqehkt.png"
        }
      />
    </div>
  );
};

export default FormasPago;
