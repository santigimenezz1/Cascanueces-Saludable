import { Link } from "react-router-dom";
import BotonInicioSesion from "../BotonInicioSesion/BotonInicioSesion";
import Buscador from "../Buscador/Buscador";
import Carrito from "../Carrito/Carrito";

import "../Enlaces/enlaces.css";
import EnlaceUniverseIo from "./EnlaceUniverseIo/EnlaceUniverseIo";

const Enlaces = ( {setBurguerOn} ) => {
  return (
    <div className="enlaces">
      <ul>
        <Link onClick={()=>setBurguerOn(false)} className="enlaces__link" to={"/"}>
        <EnlaceUniverseIo text={"HOME"}  ruta={"/"}/>
        </Link>
        <Link onClick={()=>setBurguerOn(false)} className="enlaces__link" to={"/categoria"}>
        <EnlaceUniverseIo text={"CATEGORIAS"}  ruta={"/categoria"}/>
        </Link>
        <Link onClick={()=>setBurguerOn(false)} className="enlaces__link" to={"/nosotros"}>
        <EnlaceUniverseIo text={"NOSOTROS"}  ruta={"/nosotros"}/>
        </Link>
      </ul>
    </div>
  );
};

export default Enlaces;
