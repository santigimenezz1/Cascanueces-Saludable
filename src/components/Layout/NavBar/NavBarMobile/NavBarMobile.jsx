import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CSSTransition } from "react-transition-group";
import ModalInicioSesion from "../ModalInicioSesion/ModalInicioSesion";
import UserLogin from "../UserLogin/UserLogin";
import { CartContext } from "../../../../Context/CartContext";
import Enlaces from "../Enlaces/Enlaces";
import Carrito from "../Carrito/Carrito";

import "./navBarMobile.css"; // Asegúrate de importar el archivo CSS adecuadamente.

const NavBarMobile = () => {
  const { usuarioOn, setUsuarioOn, user, setUser } = useContext(CartContext);
  const [burguerOn, setBurguerOn] = useState(false);

  return (
    <div className="container__navBarMobile">
      <div className="navBarMobile">
        <div className="navBar__logo__mobile">
          <img
            onClick={() => setBurguerOn(!burguerOn)}
            style={{ width: "30px", cursor: "pointer", padding: "5px" }}
            src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1693347152/CASCANUCES%20SALUDABLE/menu_xat1up.png"
            alt="Menu"
          />
        </div>

        <div className="navBar__enlaces">
          <div className="navBar__enlaces__icons">
            <div className="navBar__enlaces__icons__corazon">
              <Link className="link__corazon" to={"/favorito"}>
                <FavoriteBorderIcon fontSize="medium" />
              </Link>
            </div>
            <div className="navBar__enlaces__icons__login">
              {usuarioOn ? (
                <UserLogin
                  user={user}
                  usuarioOn={usuarioOn}
                  setUsuarioOn={setUsuarioOn}
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
      {/* Aplica la transición al contenedor de los enlaces */}
      <div className="container__enlaces">
        <CSSTransition
          in={burguerOn}
          timeout={300}
          classNames={{
            enter: "enlaces-enter",
            enterActive: "enlaces-enter-active",
            exit: "enlaces-exit",
            exitActive: "enlaces-exit-active",
          }}
          unmountOnExit
        >
          <Enlaces setBurguerOn={setBurguerOn} />
        </CSSTransition>
      </div>
    </div>
  );
};

export default NavBarMobile;
