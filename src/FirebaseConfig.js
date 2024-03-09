import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDluRnb_JCozf_uUqMeli4-GnC-yHkziUs",
  authDomain: "cascanueces-f0a34.firebaseapp.com",
  projectId: "cascanueces-f0a34",
  storageBucket: "cascanueces-f0a34.appspot.com",
  messagingSenderId: "315086141752",
  appId: "1:315086141752:web:0f6994e8a1aabd46f929cd",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


export const login = async ({ email, password }) => {
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export const create = async ({ email, password }) => {
  const auth = getAuth();

  // Verificar si el correo electrónico ya existe
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Si llegamos aquí, significa que el usuario ya existe, muestra la alerta
    return { userExists: true };
  } catch (error) {
    // Si se produce un error, el usuario no existe, continúa con la creación de la cuenta
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
      return { error: error.message };
    }
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true; // Indicar que el correo se envió con éxito
  } catch (error) {
    return false; // Indicar que ocurrió un error al enviar el correo
  }
};

export const subirArchivo = async (file) => {
  const storageRef = ref(storage, v4()); // Genera un ID único para el archivo
  try {
    await uploadBytes(storageRef, file);
    // Obten la URL de descarga del archivo después de subirlo
    const downloadURL = await getDownloadURL(storageRef);

    // Devuelve la URL de descarga
    return downloadURL;
  } catch (error) {
    console.error("Error al subir el archivo", error);
    throw error; // Puedes manejar el error en el componente que llama a esta función
  }
};


