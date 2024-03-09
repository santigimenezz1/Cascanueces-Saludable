import "../SectionNosotros/nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="nosotros__imagenFija">
        <h1>Sobre Nosotros</h1>
      </div>
      <div className="nosotros__info">
        <div className="nosotros__info__text">
          <h1 className="nostros__info__text__titulo">
            Hola, somos Nacho y Lucho
          </h1>
          <p className="nosotros__info__texto">
          Cascanueces saludable, tu elección consciente. Nuestra tienda nació de la pasión por ofrecer frutos secos y productos naturales de la más alta calidad. Desde el principio, nos enfocamos en seleccionar cuidadosamente frutos secos como nueces y almendras, junto con otros productos naturales, todos provenientes de agricultura agroecológica y productores locales. Valoramos la salud y el bienestar, y es por eso que trabajamos con emprendedores que comparten nuestra filosofía de vida. Así, te garantizamos productos elaborados con amor y la menor cantidad posible de intermediarios. Descubre la frescura y la calidad en cada bocado con FrutoSalud.
          </p>
        </div>
        <div className="nosotros__info__imagen">
          <img
            className="imagen__nosotros"
            src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691782335/CASCANUCES%20SALUDABLE/captura_casca_e30cve.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
