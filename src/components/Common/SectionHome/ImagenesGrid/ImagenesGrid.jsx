import "../ImagenesGrid/imagenesGrid.css";
const ImagenesGrid = () => {
  return (
    <div className="imagenesGrid">
      <div className="imagenesGrid__imagenPrincipal">
        <div className="imagenesGrid__imagenPrincipal__caja1">
          <img src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691549823/CASCANUCES%20SALUDABLE/prod4_ukcwyo.png"></img>
        </div>
        <div className="imagenesGrid__imagenPrincipal__caja1">
          <img src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691549822/CASCANUCES%20SALUDABLE/prod6_sakyxp.png"></img>
        </div>
      </div>
      <div className="imagenesGrid__imagenesSecundaria">
        <div className="imagenesGrid__imagenesSecundaria__caja1">
          <div className="container__imagenesSecundaria">
            {" "}
            <img
              className="imagenesGrid__imagenesSecundaria__caja2__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691548972/CASCANUCES%20SALUDABLE/prod2_pgv3dt.png"
            ></img>
          </div>
          <div className="container__imagenesSecundaria">
            {" "}
            <img
              className="imagenesGrid__imagenesSecundaria__caja2__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691548972/CASCANUCES%20SALUDABLE/prod1_f2xung.png"
            ></img>
          </div>
          <div className="container__imagenesSecundaria">
            {" "}
            <img
              className="imagenesGrid__imagenesSecundaria__caja2__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691548972/CASCANUCES%20SALUDABLE/prod3_qxcwbm.png"
            ></img>
          </div>
        </div>
        <div className="imagenesGrid__imagenesSecundaria__caja2">
          <div className="container__imagenesSecundaria">
            {" "}
            <img
              className="imagenesGrid__imagenesSecundaria__caja2__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691549810/CASCANUCES%20SALUDABLE/prod5_ygutb5.png"
            ></img>
          </div>
          <div className="container__imagenesSecundaria">
            {" "}
            <img
              className="imagenesGrid__imagenesSecundaria__caja2__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691504184/CASCANUCES%20SALUDABLE/prueba_kz2w9e.png"
            ></img>
          </div>
          <div className="container__imagenesSecundaria">
            {" "}
            <img
              className="imagenesGrid__imagenesSecundaria__caja2__imagen"
              src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691599922/CASCANUCES%20SALUDABLE/c910acd43a7f6ac93a9403178000c24c3eda54ab7911f50199f0d6ec7b9eec7011222_mgzofd.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagenesGrid;
