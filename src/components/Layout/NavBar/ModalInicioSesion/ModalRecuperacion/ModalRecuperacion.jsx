import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalRecuperacion/modalRecuperacion.css'
import { TextField } from '@mui/material';
import { Formik, useFormik } from 'formik';
import Swal from 'sweetalert2';

import { resetPassword } from '../../../../../FirebaseConfig';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alingItems:"center",
  gap: 2,
  border:"5px solid purple"
  
};



export default function ModalRecuperacion() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [objeto, setObjeto] = React.useState({})

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      
    },
    onSubmit: (data) => {
        setObjeto(data)
        recuperar(data) 
  
    },
    validateOnChange: false,
         
})

const recuperar = async (data) => {
    const email = data.email; // Usa el correo capturado en el formulario
    if (email) {
      const result = await resetPassword(email);
      if (result) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Verifica tu correo para cambiar la contraseña",
          showConfirmButton: true,
          timer: 4500,
          customClass: {
            container: "my-custom-alert", // Clase personalizada para la alerta
            backdrop: "my-custom-backdrop", // Clase personalizada para el fondo de la alerta
          },
        });        
        handleClose()
      } else {
       
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El correo no existe !  ",
          showConfirmButton: true,
          timer: 4500,
          customClass: {
            container: "my-custom-alert", // Clase personalizada para la alerta
            backdrop: "my-custom-backdrop", // Clase personalizada para el fondo de la alerta
          },
        });

       
      }
    } else {
      // Mostrar mensaje de error si el campo de correo está vacío
      alert("Debes ingresa un email ")
    }
  };

  return (
    <div>
      <Button style={{color:"purple", marginTop:"10px"}} onClick={handleOpen}>¿Olvidaste tu contraseña?</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="container__modal__recuperacion">
       
        <div className='container__recuperacion__button'>
        <form style={{width:"100%",zIndex:"1"}} onSubmit={handleSubmit}>
        <Typography style={{textAlign:"start"}} id="modal-modal-description" sx={{ mt: 2 }}>
          Ingresa tu e-mail 
        </Typography>     
        <TextField onChange={handleChange} name='email' style={{width:"100%"}} id="standard-basic" label="Email" variant="standard" />
        <div  style={{display:"flex", width:"100%", justifyContent:"center", marginTop:"20px"}}>
        <button type='submit' className='button__recuperar'>Recuperar</button>
        </div>
        </form>
        </div>
        </Box>
      </Modal>
    </div>
  );
}