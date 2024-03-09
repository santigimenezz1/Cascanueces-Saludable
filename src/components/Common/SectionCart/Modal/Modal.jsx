import * as React from "react";
import "../Modal/modal.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import BotonFondoFijo from "../../SectionHome/FondoFijo/BotonFondoFijo/BotonFondoFijo";
import { CartContext } from "../../../../Context/CartContext";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadiuis: "10px",
  
};

export default function ModalCart({
  titulo,
  subtitulo,
  nombreBoton,
  eliminarOrden,
  producto,
}) {
  const { clearCart } = React.useContext(CartContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const eliminar = (producto) => {
    eliminarOrden(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Orden eliminada correctamente !  ",
      showConfirmButton: true,
      timer: 4500,
      customClass: {
        container: "my-custom-alert", // Clase personalizada para la alerta
        backdrop: "my-custom-backdrop", // Clase personalizada para el fondo de la alerta
      },
    });
    handleClose();
  };
  return (
    <div>
      <div onClick={handleOpen}>
        <BotonFondoFijo text={nombreBoton} />
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className="container-modal">
            <Typography
              style={{ textAlign: "center" }}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {titulo}
            </Typography>
            <Typography
              style={{ fontSize: "15px", textAlign:"center" }}
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {subtitulo}
            </Typography>
            <div className="modal__botones">
              <div onClick={() => clearCart()}>
                <div onClick={() => eliminar(producto.id)}>
                  <BotonFondoFijo text={"Aceptar"} />
                </div>
              </div>
              <div  onClick={() => handleClose()}>
                <BotonFondoFijo text={"Cancelar"} />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
