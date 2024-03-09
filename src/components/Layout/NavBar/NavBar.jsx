import "../NavBar/navBar.css";
import Enlaces from "./Enlaces/Enlaces";
import Carrito from "./Carrito/Carrito";
import Logo from "./Logo/Logo";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";
import ModalInicioSesion from "./ModalInicioSesion/ModalInicioSesion";
import UserLogin from "./UserLogin/UserLogin";
import { useContext, useState } from "react";
import { CartContext } from "../../../Context/CartContext";

const NavBar = () => {
  const { usuarioOn, setUsuarioOn, user, setUser } = useContext(CartContext);

  return (
    <div className="navBar">
      <div className="navBar__logo">
        <Logo />
      </div>

      <div className="navBar__enlaces">
        <Enlaces />
        <div className="navBar__enlaces__icons">
          <div className="navBar__enlaces__icons__corazon">
            <Link className="link__corazon" to={"/favorito"}>
              <FavoriteBorderIcon fontSize="medium" />
            </Link>
          </div>
          <div className="navBar__enlaces__icons__login">
            {usuarioOn ? (
              <UserLogin
              />
            ) : (
              <ModalInicioSesion
                setUser={setUser}
                usuarioOn={usuarioOn}
                setUsuarioOn={setUsuarioOn}
              />
            )}
          </div>
          <Carrito />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
