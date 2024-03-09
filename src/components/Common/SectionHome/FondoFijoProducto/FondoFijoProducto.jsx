import "../FondoFijoProducto/fondoFijoProducto.css";

const FondoFijoProducto = () => {
  return (
    <div className="fondoFijoProducto">
      <img className="fondoFijoProducto__imagen" src="https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692729857/CASCANUCES%20SALUDABLE/pexels_marta_branco_1340116_6376c0c629_lgcoke.jpg"></img>
      <div className="fondoFijo__containerText">
        <h3>Novedad</h3>
        <div>
          <h3 className="titulo__fondoFijoProducto" >Ahora dos sucursales</h3>
        </div>
        <div className="fondoFijo__containerText__direcciones">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <h3 className="fondoFijoProducto__direccion" >*Tribunales: Dorrego 1668</h3>
            <h3 className="fondoFijoProducto__direccion2">*Abasto: Viamonte 1275 (Solo compras presenciales)</h3>
          </div>
          <div className="container__fondoFijoProducto__ultimoTexto">
            <h3 className="" style={{ fontSize: "18px" }}>
              Un espacio fruto de mucho mucho mucho trabajo.
            </h3>
            <h3>Desde hace ya casi 6 años!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FondoFijoProducto;
