import * as React from "react";
import '../InicioSesion/inicioSesion.css'
import { useFormik } from "formik";
import { login } from "../../../../FirebaseConfig";
import { Backdrop, Fade, Modal, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import ModalCrearCuenta from "../../../Layout/NavBar/ModalCrearCuenta/ModalCrearCuenta";
import ModalRecuperacion from "../../../Layout/NavBar/ModalInicioSesion/ModalRecuperacion/ModalRecuperacion";
import { CartContext } from "../../../../Context/CartContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import * as Yup from "yup";
import CloseIcon from "@mui/icons-material/Close";



export default function ModalInicioSesion() {
  const { usuarioOn, setUsuarioOn, user, setUser } = React.useContext(CartContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [estado, setEstado] = React.useState(false);
  const [circular, setCircular] = React.useState(false);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email debe contener @")
        .required("Este campo es requerido"),
      password: Yup.string()
        .required("Este campo es requerido")
        .min(6, "debe tener minimo 6 caracteres"),
    }),
    async onSubmit(data) {
      try {
        setUser(data);
        let resultado = await login(data);
        if (resultado.user) {
          setCircular(true);
          setTimeout(() => {
            setUsuarioOn(!usuarioOn);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Bienvenido a Cascanueces saludable ! ",
              showConfirmButton: true,
              timer: 3500,
            });
          }, 2000);
        } else {
          alert("Esta cuenta no existe");
        }
      } catch (error) {
        setEstado(true);
      }
    },

    validateOnChange: false,
  });
  return (
    <div className="modal__inicioSesion__boton">
      <button className="button__incioSesion__cart " onClick={handleOpen}>
       <h1>Iniciar sesion</h1>
      </button>
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
          <div className="container-general-box">
            <div
              className={
                circular
                  ? "container_loadingCircular"
                  : "container_loadingCircular displayCircular"
              }
            >
            <div className="loader"></div>
            </div>
            <div className="container-box">
              <CloseIcon
                onClick={handleClose}
                className="icon-box"
                fontSize="small"
              />
              <div className="tipografia-box">
                <Typography
                  style={{ color: "black", fontSize: "25px" }}
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Iniciar sesión
                </Typography>
                <Typography
                  style={{
                    color: "purple",
                    fontSize: "15px",
                    fontWeight: "200",
                  }}
                  id="transition-modal-description"
                >
                  Para comenzar ingresá tu email
                </Typography>
              </div>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                className="input__inicioSesion"
                  name="email"
                  onChange={handleChange}
                  onFocus={() => setEstado(false)}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  error={errors.email ? true : false}
                  helperText={errors.email}
                />
                <TextField
                className="input__inicioSesion"
                  
                  name="password"
                  onChange={handleChange}
                  onFocus={() => setEstado(false)}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  error={errors.password ? true : false}
                  helperText={errors.password}
                  type="password"
                />
                {estado && <h1>Esta cuenta no existe. Crea tu cuenta</h1>}
                <div className="container-botonBox">
                  <button type="submit" className="botones-box">
                    Continuar
                  </button>
                  <ModalCrearCuenta
                    setUser={setUser}
                    usuarioOn={usuarioOn}
                    setUsuarioOn={setUsuarioOn}
                  />
                </div>
                <ModalRecuperacion />
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

