import DashBoard from "../Dashboard/Dashboard";
import Ayuda from "../components/Common/SectionAyuda/Ayuda";
import Cart from "../components/Common/SectionCart/Cart";
import Categoria from "../components/Common/SectionCategory/Categoria";
import Detalle from "../components/Common/SectionDetalle/Detalle";
import SectionFavorito from "../components/Common/SectionFavorito/SectionFavorito";
import Carrusel from "../components/Common/SectionHome/Carrusel/Carrusel";
import Home from "../components/Common/SectionHome/Home";
import TarjetaProducto from "../components/Common/SectionHome/TarjetaProducto/TarjetaProducto";
import MiCuenta from "../components/Common/SectionMiCuenta/MiCuenta";
import Nosotros from "../components/Common/SectionNosotros/Nosotros";
import Carrito from "../components/Layout/NavBar/Carrito/Carrito";
import Logo from "../components/Layout/NavBar/Logo/Logo";

export let routes = [
  {
    id: "Home",
    path: "/",
    Element: Home,
  },
  {
    id: "categoria",
    path: "/categoria/:categoria",
    Element: Categoria,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: DashBoard,
  },
  {
    id: "categoria",
    path: "/categoria/",
    Element: Categoria,
  },
  {
    id: "favorito",
    path: "/favorito",
    Element: SectionFavorito,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "detalle",
    path: "/detalle/:id",
    Element: Detalle,
  },
  {
    id: "nosotros",
    path: "/nosotros",
    Element: Nosotros,
  },
  {
    id: "ayuda",
    path: "/ayuda",
    Element: Ayuda,
  },
  {
    id: "micuenta",
    path: "/miCuenta",
    Element: MiCuenta,
  },
];
