import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        style={{ width: "90px", cursor: "pointer" }}
        src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691460247/CASCANUCES%20SALUDABLE/CARRUSEL/Isologo_c_1_wfgygq.png"
      ></img>
    </Link>
  );
};

export default Logo;
