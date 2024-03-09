import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import "../ModalCrearCuenta/modalCrearCuenta.css";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { addDoc, collection } from "firebase/firestore";
import Loading from "./Loading/Loading";
import CloseIcon from "@mui/icons-material/Close";
import { db } from "../../../../FirebaseConfig";
import LoadingModal from "../../../Common/SectionCart/LoadingModal/LoadingModal";

const styleModalCrear = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "auto",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "4px",
  border: "none",
};

export default function ModalCrearCuenta({ usuarioOn, setUsuarioOn, setUser }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = React.useState(false);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      codigoArea: "",
      telefono: "",
      password: "",
      repetirContraseña: "",
    },
    validationSchema: Yup.object({
      // ... (validación del formulario)
    }),

    onSubmit: async (data) => {
      const auth = getAuth();
      
      try {
        await signInWithEmailAndPassword(auth, data.email, data.password);
        alert("el correo ya esta en uso");
        // Si el inicio de sesión es exitoso, muestra una alerta
      } catch (signInError) {
        // Si el inicio de sesión falla, crea la cuenta
        try {
          const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
          // Aquí manejas la creación de la cuenta
          addDoc(collection(db, "orders"), data);
          setUser(data);
          setLoading(true);
          setTimeout(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Bienvenido a Cascanueces saludable ! ",
              showConfirmButton: true,
              timer: 3500,
            });
            setUsuarioOn(true);
            handleClose();
          }, 3000);
        } catch (createError) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Este correo ya está registrado!",
            showConfirmButton: true,
            timer: 4500,
            customClass: {
              container: "my-custom-alert", // Clase personalizada para la alerta
              backdrop: "my-custom-backdrop", // Clase personalizada para el fondo de la alerta
            },
          });

        }
      }
    },
  });

  return (
    <div className="button__crearCuenta">
      <Button 
       
        onClick={handleOpen}
      >
        Crear cuenta
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
          <div className="stylesModalCrear"  sx={styleModalCrear}>
            <div className="container-box">
              <CloseIcon
                onClick={handleClose}
                className="icon-box"
                fontSize="small"
              />
              <div className="tipografia-box">
                <Typography
                  style={{ color: "black" }}
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Registrarse
                </Typography>
                <Typography
                  style={{ color: "purple" }}
                  id="transition-modal-description"
                >
                  Ingresá tus datos para crear tu cuenta
                </Typography>
              </div>

              <form onSubmit={handleSubmit}>
              <div className="iputs-form">
                <TextField
                  name="nombre"
                  onChange={handleChange}
                  className="input-name"
                  id="standard-basic"
                  label="nombre"
                  variant="standard"
                  helperText={errors.nombre}
                  error={errors.nombre ? true : false}
                />

                <TextField
                  name="apellido"
                  onChange={handleChange}
                  className="input-name"
                  id="standard-basic"
                  label="Apellido"
                  variant="standard"
                  helperText={errors.apellido}
                  error={errors.apellido ? true : false}
                />
              </div>

              <TextField
                name="email"
                onChange={handleChange}
                className="input-email"
                id="standard-basic"
                label="Email"
                variant="standard"
                helperText={errors.email}
                error={errors.email ? true : false}
              />

              <div className="iputs-form">
                <div style={{ width: "100%" }}>
                  <h1
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "black",
                      fontWeight: 400,
                    }}
                  >
                    telefono de contacto
                  </h1>
                  <div className="container__telefono__input">
                    <TextField
                      name="codigoArea"
                      onChange={handleChange}
                      className="input-codigoArea"
                      id="standard-basic"
                      label="Codigo de area"
                      variant="standard"
                      helperText={errors.codigoArea}
                      error={errors.codigoArea ? true : false}
                    />

                    <TextField
                      name="telefono"
                      onChange={handleChange}
                      className="input-telefono"
                      id="standard-basic"
                      label="Telefono"
                      variant="standard"
                      helperText={errors.telefono}
                      error={errors.telefono ? true : false}
                    />
                  </div>
                </div>
              </div>
              <div className="input-password">
                <TextField
                  name="password"
                  onChange={handleChange}
                  className="input-name"
                  id="standard-basic"
                  label="Contraseña"
                  variant="standard"
                  type="password"
                  helperText={errors.password}
                  error={errors.password ? true : false}
                />

                <TextField
                  name="repetirContraseña"
                  onChange={handleChange}
                  className="input-name"
                  id="standard-basic"
                  label="Repetir contraseña"
                  variant="standard"
                  type="password"
                  helperText={errors.repetirContraseña}
                  error={errors.repetirContraseña ? true : false}
                />
              </div>
              <div className="iputs-form"></div>
              <div className="container-link">
                <button type="submit" className="buton-crearCuenta">
                  Crear cuenta
                </button>
                <h1 style={{ color: "black" }}>
                  ¿Ya tenes una cuenta? inicia sesion
                  <span
                    onClick={() => handleClose()}
                    to={"/modalIniciarSesion"}
                    style={{
                      textDecoration: "none",
                      paddingLeft: "5px",
                      cursor: "pointer",
                      color: "purple",
                    }}
                  >
                    acá
                  </span>
                </h1>
                <div className={ loading ? "loading_crearCuenta" : "loading_crearCuenta displayOff"}>
                  <Loading />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </Modal>
  </div>
);
}