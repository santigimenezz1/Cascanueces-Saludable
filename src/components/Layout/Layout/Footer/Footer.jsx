import { Link } from "react-router-dom";
import "../Footer/footer.css";
import RedesSociales from "./RedesSociales/RedesSociales";
import { Height } from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__navegacion">
        <h1>Navegacion</h1>
        <div className="footer__enlaces">
          <Link className="enlaces__link" to={"/"}>
            Home
          </Link>
          <Link className="enlaces__link" to={"/categoria"}>
            productos
          </Link>
          <Link className="enlaces__link" to={"/nosotros"}>
            nosotros
          </Link>
          <Link className="enlaces__link" to={"/ayuda"}>
            ayuda
          </Link>
        </div>
      </div>
      <div className="footer__contacto contactoDisplay">
        <h1>Contacto</h1>
        <div className="footer__contacto__direccion ">
          <img
            style={{ width: "25px", height: "25px" }}
            src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691875953/CASCANUCES%20SALUDABLE/home-automation_m1x9nb.png"
          ></img>
          <h3>Oroño 1161</h3>
        </div>
        <div className="footer__contacto__whatsapp">
          <img
            style={{ width: "25px", height: "25px" }}
            src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691597093/CASCANUCES%20SALUDABLE/WHATSAPP2_yogims.png"
          ></img>
          <h1>3412645481</h1>
        </div>
        <div className="footer__contacto__email">
          <img
            style={{ width: "25px", height: "25px" }}
            src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691875688/CASCANUCES%20SALUDABLE/correo-electronico_lnhlmm.png"
          ></img>
          <h1>Cascanueces@gmail.com</h1>
        </div>
      </div>
      <div className="footer__redes">
        <h1>Nuestras redes sociales</h1>
        <RedesSociales />
      </div>
    </div>
  );
};

export default Footer;
