import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Carrusel from "./components/Common/SectionHome/Carrusel/Carrusel";
import FondoFijo from "./components/Common/SectionHome/FondoFijo/FondoFijo";
import TarjetaCategoria from "./components/Common/SectionHome/TarjetaCategoria/TarjetaCategoria";
import TarjetaProducto from "./components/Common/SectionHome/TarjetaProducto/TarjetaProducto";
import NavBar from "./components/Layout/NavBar/NavBar";
import AppRouter from "./Routes/AppRouter";
import CartContextComponent, { CartContext } from "./Context/CartContext";
import '../src/mediaQuery.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextComponent>
            <AppRouter />
        </CartContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
