import { useContext } from "react";
import "../SectionFavorito/sectionFavorito.css";
import { CartContext } from "../../../Context/CartContext";
import TarjetaFavorito from "./TarjetaFavorito/TarjetaFavorito";
import Swal from "sweetalert2";
const SectionFavorito = () => {
  const { favorito } = useContext(CartContext);
  const newFavorito = [...favorito];


  return (
    <div className="favorito">
    <div className="container__titulo__favorito">
    <h1 className="favorito__titulo">Tus favoritos</h1>
    </div>
      <div className="favorito__tarjetas">
        {Object.keys(favorito).length > 0 ? (
          favorito.map((producto) => (
            <TarjetaFavorito key={producto.id} producto={producto} />
          ))
        ) : (
          <div className="container-sinFavoritos">
            <img
              className="favorito__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691959216/CASCANUCES%20SALUDABLE/1940308_cd30in.png"
            ></img>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "100px",
              }}
            >
              <h1 className="favorito__titulo">
                Tu lista de deseos está vacía
              </h1>
              <h2 className="favorito__subtitulo">
                Mantén un ojo en los productos que te gustan agregándolos a tu
                lista de deseos
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionFavorito;
