import { useFormik } from 'formik'
import React, { useState } from 'react'
import { subirArchivo } from '../../../FirebaseConfig'


const AgregarImagen = () => {
    const [objeto, setObjeto] = useState("")
    const [urlImagen, setUrlImagen] = useState("")
    const { handleSubmit, handleChange, setFieldValue, values } = useFormik({
        initialValues: {
            file: null, // Usamos null en lugar de una cadena vacía para representar un archivo
        },
        onSubmit: async (values) => {
            if (values.file) {
                try {
                    const imageUrl = await subirArchivo(values.file);
                    // Imprime la URL de descarga en la consola
                    setUrlImagen(imageUrl);
                   
                    
        
                    // Puedes hacer algo más con la URL, como almacenarla en el estado o mostrarla en tu componente
                } catch (error) {
                    console.error("Error al subir el archivo", error);
                }
            } else {
                console.error("Por favor, seleccione un archivo antes de enviarlo.");
            }
        },
        
        validateOnChange: false,
    })

    const handleFileChange = (event) => {
        const file = event.currentTarget.files[0];
        setFieldValue('file', file);
        setObjeto(file); // Actualiza el estado con el archivo seleccionado
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='file'
                    name='file'
                    onChange={handleFileChange}
                />
                <button type='submit'>Enviar</button>
            </form>
            <h1>{urlImagen}</h1>
        </div>
    )
}

export default AgregarImagen;
