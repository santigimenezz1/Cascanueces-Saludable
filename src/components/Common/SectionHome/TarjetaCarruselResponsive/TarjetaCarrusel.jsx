import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../TarjetaCarruselResponsive/tarjetaCarrusel.css";
import TarjetaHover from "../TarjetasHover/TarjetaHover";

const MyCarousel = ({ filtradoAlmendras, filtradoHelados,filtradoCaldito,filtradoNueces, ...props }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // opcional, por defecto es 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // opcional, por defecto es 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // opcional, por defecto es 1.
    }
  };


  return (
    <Carousel className="carruselTarjetasMobile"
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      keyBoardControl={true}
      customTransition="all 0.5s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {filtradoAlmendras.length > 0 &&
        filtradoAlmendras.map((producto) => (
          <div className="inputs__tarjetaCarrrusel" key={producto.id}>
            <TarjetaHover producto={producto} />
          </div>
        ))}

    </Carousel>
  );
};

export default MyCarousel;
