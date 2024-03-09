import { useEffect, useState } from "react";
import "../Carrusel/carrusel.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carrusel = () => {
  const images = [
    "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691460247/CASCANUCES%20SALUDABLE/CARRUSEL/4430e09bc1ff6dd9c67058cf7a2638571b157e5f8c65c872992b6535897c84e511222_owf80v.png",
    "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691417709/CASCANUCES%20SALUDABLE/CARRUSEL/adbe5968755ebe8595386e16fad0bfba4cc2d6760f3cfefa03324eb20db6edb111222_qgibvs.jpg",
    "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691530109/CASCANUCES%20SALUDABLE/CARR1_iqijs4.png                                                                                                                                                                       ",
  ];
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[0]);
  const selectedNewImage = (index, images, next = true) => {
    const condicion = next ? index < images.length - 1 : index > 0; //si es true la condicion es ? sino la condicion es :
    const nextIndex = next
      ? condicion
        ? index + 1
        : 0
      : condicion
      ? index - 1
      : images.length - 1;
    setImage(images[nextIndex]);
    setIndex(nextIndex);
  };
  const previus = () => {
    selectedNewImage(index, images, false);
  };
  const next = () => {
    selectedNewImage(index, images);
  };
  useEffect(() => {
    const intervalo = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(intervalo);
  });
  return (
    <>
      <div className="container-carrusel">
        <img className="carrusel-image" src={image}></img>
        <p className="button-carrusel1" onClick={next}>
          <ArrowBackIosIcon className="icon-carrusel" />
        </p>
        <h1 className="button-carrusel2" onClick={previus}>
          <ArrowForwardIosIcon className="icon-carrusel" />
        </h1>
      </div>
    </>
  );
};
export default Carrusel;
