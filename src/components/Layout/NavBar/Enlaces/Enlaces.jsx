import { Link } from "react-router-dom";
import BotonInicioSesion from "../BotonInicioSesion/BotonInicioSesion";
import Buscador from "../Buscador/Buscador";
import Carrito from "../Carrito/Carrito";

import "../Enlaces/enlaces.css";

const Enlaces = ( {setBurguerOn} ) => {
  return (
    <div className="enlaces">
      <ul>
        <Link onClick={()=>setBurguerOn(false)} className="enlaces__link" to={"/"}>
          Home
        </Link>
        <Link onClick={()=>setBurguerOn(false)} className="enlaces__link" to={"/categoria"}>
          productos
        </Link>
        <Link onClick={()=>setBurguerOn(false)} className="enlaces__link" to={"/nosotros"}>
          nosotros
        </Link>
      </ul>
    </div>
  );
};

export default Enlaces;
