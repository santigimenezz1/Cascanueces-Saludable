import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TarjetaCart from "../../SectionCart/TarjetaCart/TarjetaCart";
import "../ModalMiCuenta/ModalMiCuenta.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import TarjetaModal from "./TarjetaModal/TarjetaModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxHeight: "80%", // Ajustar la altura máxima según tus necesidades
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  border: "8px solid purple",
  padding: "20px",
  overflowY: "auto",
  backgroundColor: "rgb(246, 246, 246)",
  customScrollbarThumb: {
    backgroundColor: "rgb(246, 246, 246)",
  },
  customScrollbarTrack: {
    backgroundColor: "#961010",
  },
};

export default function ModalMiCuenta({ producto }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const mostrarPrecioConFormato = (precio) => {
    //FUNCION PARA PONERLE EL PUNTO A LOS PRECIOS
    return precio.toLocaleString("es-ES");
  };

  let items = producto.items;

  return (
    <div>
      <Button
      className="boton__verReserva"
        style={{ border: "1px solid purple", color: "black", width:"140px" }}
        onClick={handleOpen}
      >
        Ver reserva
      </Button>
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
          <Box className={"box__modalMiCuenta"} sx={style}>
            <div className="container-retroceso_miCuenta">
              <Typography
                style={{ fontSize: "35px" }}
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Tu reservas
              </Typography>
              <Link to={"/miCuenta"}>
                <div onClick={handleClose}>
                  <KeyboardBackspaceIcon
                    fontSize="medium"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </Link>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Numero de reserva:{" "}
              <span style={{ color: "purple" }}>{producto.id}</span>
            </Typography>
            <div className="container_tarjetas_miCuenta">
              {items.map((producto) => (
                <TarjetaModal key={producto.id} producto={producto} />
              ))}
            </div>
            <div className="container_total_modalMiCuenta">
              <h1>
                Total de la reserva: {mostrarPrecioConFormato(producto.total)}
              </h1>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
