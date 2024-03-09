import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { products } from "../ProductSmock";


const DashBoard = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refProduct = collection(db, "products");
      addDoc(refProduct, product);
    });
  };
  return <button onClick={rellenar}>Rellenar base de datos</button>;
};

export default DashBoard;
