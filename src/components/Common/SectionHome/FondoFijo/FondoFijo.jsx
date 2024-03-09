import { Link } from "react-router-dom";
import "../FondoFijo/fondoFijo.css";
import BotonFondoFijo from "./BotonFondoFijo/BotonFondoFijo";

const FondoFijo = () => {
  return (
    <div className="fondoFijo">
      <img className="imagen__fondoFijo" src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692732815/CASCANUCES%20SALUDABLE/f.elconfidencial.com_original_7ea_ffb_85a_7eaffb85a5f213de53b21de94b2ea4df_dqrobi.jpg"></img>
      <div className="fondoFijo__containerText">
        <h3>Novedad</h3>
        <div>
          <h3 className="text__nuestraSucursal" >Nuestra sucursal</h3>
        </div>
        <div className="fondoFijo__containerText__direcciones">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <h3 style={{ fontSize: "30px" }}>Oroño 1161</h3>
            <h3 className="text__somosCascanuces" >Somos Cascanueces</h3>
          </div>
          <div className="container__fondoFijo__textFinal">
            <h3 className="text__frutoAmor">
              {" "}
              fruto de mucho amor y trabajo.
            </h3>
            <h3>Desde hace ya casi 4 años!</h3>
            <h3>Envíos a todo Rosario, VGG y Fisherton</h3>
          </div>
          <Link to={'/nosotros'}>
          <BotonFondoFijo text={"Sobre nosotross"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FondoFijo;
