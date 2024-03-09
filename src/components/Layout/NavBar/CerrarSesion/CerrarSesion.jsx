import * as React from "react";
import "../CerrarSesion/cerrarSesion.css";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import BotonFondoFijo from "../../../Common/SectionHome/FondoFijo/BotonFondoFijo/BotonFondoFijo";
import { CartContext } from "../../../../Context/CartContext";

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

export default function CerrarSesion({
  titulo,
  subtitulo,
  nombreBoton,
  cerrarSesionUser,
  usuarioOn,
  setUsuarioOn,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 const {logout} = React.useContext(CartContext)

 const salirSesion = ()=>{
  cerrarSesionUser(false)
  logout()
 }
  return (
    <div>
      <div onClick={handleOpen}>
        <h1>Cerrar sesion</h1>
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
              style={{ fontSize: "18px", textAlign: "center" }}
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {subtitulo}
            </Typography>
            <div className="modal__botones">
              <div onClick={() => salirSesion(false)}>
                <BotonFondoFijo text={"Aceptar"} />
              </div>
              <div onClick={() => handleClose()}>
                <BotonFondoFijo text={"Cancelar"} />
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
