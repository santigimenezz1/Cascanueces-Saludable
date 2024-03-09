import { Link } from "react-router-dom";
import "../EnlacesCategoria/enlacesCategoria.css";
import { useFormik } from "formik";
import { useState } from "react";
const EnlacesCategoria = ({ filtro, filtrarEstado, data, setData }) => {
  const [valor, setValor] = useState("");
  const newData = [...data];

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: "",
    },
    validateOnChange: false,
    onSubmit: (data) => {
    },
  });


  return (
    <div  className="enlacesCategoria">
      <div className="enalcesCategoria__buscador">
        <form onSubmit={handleSubmit} className="enalcesCategoria__form">
          <input
            onChange={handleChange}
            name="nombre"
            className="enalcesCategoria__form__input"
            type="text"
            placeholder="Buscar Productos"
          ></input>
          <button type="submit" className="enalces__form__button">
            BUSCAR
          </button>
        </form>
        <div className="enlacesCategoria__enlaces">
          <h1>Categorías de productos</h1>
          <div>
            <h1>Condimentos</h1>
            <ul>
              <Link className="link" to={"/categoria/semillas"}>
                <li>semillas</li>
              </Link>
              <Link className="link" to={"/categoria/frutos-secos"}>
                frutos secos
              </Link>
              <Link className="link" to={"/categoria/frutas-desecadas"}>
                frutas desecadas
              </Link>
              <Link className="link" to={"/categoria/cereales"}>
                cereales
              </Link>
              <Link className="link" to={"/categoria/granola"}>
                granola
              </Link>
            </ul>
          </div>

          <div>
            <h1>Dulce</h1>
            <ul>
              <Link className="link" to={"/categoria/legumbres-arroz"}>
                legumbres y arroz
              </Link>
              <Link className="link" to={"/categoria/salados"}>
                salados
              </Link>
              <Link className="link" to={"/categoria/sales"}>
                sales
              </Link>
              <Link className="link" to={"/categoria/hierbas"}>
                hierbas
              </Link>
              <Link className="link" to={"/categoria/pastas-mani"}>
                pastas de mani
              </Link>
              <Link className="link" to={"/categoria/harina-avenas"}>
                harinas y Avenas
              </Link>
              <Link className="link" to={"/categoria/reposteria"}>
                Reposteria
              </Link>
              <Link className="link" to={"/categoria/tostadas-galletas-arroz"}>
                Tostadas y Galletas de arroz
              </Link>
              <Link className="link" to={"/categoria/galletitas-sin-sal"}>
                Galletitas sin sal
              </Link>
              <Link className="link" to={"/categoria/yerbas"}>
                Yerbas
              </Link>
              <Link className="link" to={"/categoria/galletitas"}>
                Galletitas
              </Link>
              <Link className="link" to={"/categoria/productos-proteicos"}>
              barritas-golisonas-veggie
              </Link>
              <Link className="link" to={"/categoria/alfajores-barritas-golisonas-veggie"}>
              alfajores-barritas-golisonas-veggie
              </Link>
              <Link className="link" to={"/categoria/productos-proteicos"}>
              Productos-proteicos
              </Link>
              <Link className="link" to={"/categoria/heladera"}>
              Heladera
              </Link>
            </ul>
          </div>
          <div>
            <h1>Infaltable</h1>
            <ul>
              <Link className="link" to={"/categoria/snacks-sin-taac"}>
              Snacks-sin-taac
              </Link>
              <Link className="link" to={"/categoria/alfajores-golosinas-sin-azucar"}>
              Alfajores-golosinas-sin-azucar
              </Link>
              <Link className="link" to={"/categoria/alfajores-barritas-golosinas-sin-taac"}>
              Alfajores-barritas-golosinas-sin-taac
              </Link>
              <Link className="link" to={"/categoria/galletitas-sin-azucar"}>
              Galletitas-sin-azucar
              </Link>
              <Link className="link" to={"/categoria/galletitas-sin-taac"}>
              Galletitas-sin-taac
              </Link>
              <Link className="link" to={"/categoria/alfajores-golosinas-sin-azucar"}>
              Alfajores-golosinas-sin-azucar
              </Link>





              <Link className="link" to={"/categoria/leches-vegetales"}>
                Leches vegetales
              </Link>
              <Link className="link" to={"/categoria/miel"}>
                Miel
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Bebidas Vegetales
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Cacao en polvo
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Café
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Coco
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Conservas
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Especias
              </Link>
              <Link className="link" to={"/categoria/caldito"}>
                Frutos Secos
              </Link>
            </ul>
          </div>
          <h1>Salado</h1>
          <ul>
            <Link className="link" to={"/categoria/caldito"}>
              Chipá
            </Link>
            <Link className="link" to={"/categoria/caldito"}>
              Chips
            </Link>
            <Link className="link" to={"/categoria/caldito"}>
              Galletitas saldas
            </Link>
            <Link className="link" to={"/categoria/caldito"}>
              Panes
            </Link>
            <Link className="link" to={"/categoria/caldito"}>
              Pizzetas
            </Link>
            <Link className="link" to={"/categoria/caldito"}>
              Tartas y empanadas
            </Link>
            <Link className="link" to={"/categoria/caldito"}>
              Tortillas
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnlacesCategoria;
