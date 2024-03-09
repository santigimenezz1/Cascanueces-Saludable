import Carrusel from "./Carrusel/Carrusel";
import TarjetaCategoria from "./TarjetaCategoria/TarjetaCategoria";
import "../SectionHome/home.css";
import TarjetaProducto from "./TarjetaProducto/TarjetaProducto";
import FondoFijo from "./FondoFijo/FondoFijo";
import IconoWhatsapp from "../../Layout/Layout/IconoWhatsapp/IconoWhatsapp";
import ImagenesGrid from "./ImagenesGrid/ImagenesGrid";
import FormasPago from "./FormasPago/FormasPago";
import TarjetaFormaPago from "./FormasPago/TarjetaFormaPago/TarjetaFormaPago";
import FondoFijoProducto from "./FondoFijoProducto/FondoFijoProducto";
import { Link } from "react-router-dom";
import TarjetaMiniCategoria from "./TarjetaMiniCategoria/TarjetaMiniCategoria";
import TarjetaHover from "./TarjetasHover/TarjetaHover";
import TarjetaGrid from "./TarjetaGrid/TarjetaGrid";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";
import { Skeleton } from "@mui/material";
import ModalFinalizarCompra from "../SectionCart/ModalFinalizarCompra/ModalFinalizarCompra";
import ModalInicioSesion from "../../Layout/NavBar/ModalInicioSesion/ModalInicioSesion";
import ModalCrearCuenta from "../../Layout/NavBar/ModalCrearCuenta/ModalCrearCuenta";
import UserLogin from "../../Layout/NavBar/UserLogin/UserLogin";
import TarjetaFavorito from "../SectionFavorito/TarjetaFavorito/TarjetaFavorito";
import TarjetaModal from "../SectionMiCuenta/ModalMiCuenta/TarjetaModal/TarjetaModal";
import NavBar from "../../Layout/NavBar/NavBarMobile/NavBarMobile";
import AgregarImagen from "../AgregarImagen/AgregarImagen";
import TarjetaCarrusel from "./TarjetaCarruselResponsive/TarjetaCarrusel";
import CarouselComponent from "./TarjetaCarruselResponsive/TarjetaCarrusel";
import MyCarousel from "./TarjetaCarruselResponsive/TarjetaCarrusel";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consulta = query(productsCollection, where("home", "==", true));
    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setData(productos);
    });
  }, []);

  const filtradoCaldito = data.filter(
    (notebook) => notebook.categoria === "caldito"
  );
  const filtradoAlmendras = data.filter(
    (monitor) => monitor.categoria === "almendras"
  );
  const filtradoHelados = data.filter(
    (fuente) => fuente.categoria === "helados"
  );
  const filtradoNueces = data.filter(
    (refrigeracion) => refrigeracion.categoria === "nueces"
  );

(filtradoAlmendras)





  return (
    <div style={{width:"100%"}}>
    <div className="home">
      <Carrusel /> 
      <div className="home__tarjetaMiniCategoria">
        <Link to={"/categoria/frutos-secos"}>
          <TarjetaMiniCategoria
            titulo={"Frutos secos"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/cereales"}>
          <TarjetaMiniCategoria
            titulo={"Cereales"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788033/CASCANUCES%20SALUDABLE/KoRo-Nussmuse-Nusscreme-Bio-Qualita_CC_88t-gesund-vegan-ohne-Zuckerzusatz-gu_CC_88nstig-online-kaufen-bestellen-1kg-5kg_bbkhmw.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/granola"}>
          <TarjetaMiniCategoria
            titulo={"Granola"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788114/CASCANUCES%20SALUDABLE/KoRo-gewu_CC_88rzte-Nu_CC_88sse-pikant-gero_CC_88stet-gesalzen-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_iexbmb.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/reposteria"}>
          <TarjetaMiniCategoria
            titulo={"Reposteria"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788191/CASCANUCES%20SALUDABLE/KoRo-Nussmischung-Nussmix-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_id334u.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/salados"}>
          <TarjetaMiniCategoria
            titulo={"Salados"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788211/CASCANUCES%20SALUDABLE/KoRo-Schokonu_CC_88sse-schokolierte-Nu_CC_88sse-mit-Schokoladenu_CC_88berzug-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_ipjsnu.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/semillas"}>
          <TarjetaMiniCategoria
            titulo={"Semillas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
            }
          />
        </Link>
        <Link className="tarjetaMiniCategoriaDisplayOff" to={"/categoria"}>
        <TarjetaMiniCategoria
          titulo={"Semillas"}
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
          }
        />
      </Link>
      <Link className="tarjetaMiniCategoriaDisplayOff" to={"/categoria"}>
      <TarjetaMiniCategoria
        titulo={"Semillas"}
        imagen={
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788219/CASCANUCES%20SALUDABLE/KoRo-Samen-Kerne-Bio-Qualita_CC_88t-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen_f9wpa4.jpg"
        }
      />
    </Link>
      </div>

      <div className="home__tarjetaCategoria">
      <Link to={'/detalle/ww3w7oPTmlg5dZ0tphZK'}>
      <TarjetaCategoria
        imagen={
          "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692738247/CASCANUCES%20SALUDABLE/FRUTOS%20SECOS%20Y%20MIXS/avellana-cruda-pelada-13272331-8c74f78730ee13cbd616455354039316-1024-1024_a6oprw.jpg"
        }
        titulo={"Avellanas"}
      />
      </Link>
        <Link to={'/detalle/oCELov54tlbHeXNbYRbe'}>
        <TarjetaCategoria
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692738247/CASCANUCES%20SALUDABLE/FRUTOS%20SECOS%20Y%20MIXS/f894324e-ae36-4fd9-b742-ae093a2cd21f_nube-9b8fa46ea1cca99b7b16009617791612-1024-1024_lmjzha.jpg"
          }
          titulo={"Nueces"}
        />
        </Link>
        <div className={"tarjetaCategoriaDisplay"}>
        <Link to={'/detalle/WrGNPs0IJ4MRQM9lHh3k'}>
        <TarjetaCategoria 
          imagen={
            "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692748460/CASCANUCES%20SALUDABLE/LEGUMBRES%20Y%20ARROZ/arveja1-c436381c66e3a1944115849157282648-640-0_hppytn.jpg"
          }
          titulo={"Arvejas"}
        />
        </Link>
        </div>
      </div>
      <h1 className="home__titulo">Los más elegidos</h1>
      <div className="home__tarjetaProducto">
        {Object.keys(data).length > 0 ? (
          filtradoHelados.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div>
        )}
        
        

        {Object.keys(data).length > 0 ? (
          filtradoCaldito.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div>
        )}

        </div>
        <div className="container__tarjeta__carrusel__mobile"  >
        {
          filtradoCaldito.length > 0 &&
            <MyCarousel filtradoAlmendras={filtradoCaldito}  />
        }
        </div>
        <div className="container__tarjeta__carrusel__mobile"  >
        {
          filtradoHelados.length > 0 &&
            <MyCarousel filtradoAlmendras={filtradoHelados}  />
        }
        </div>
      <FondoFijo />
      <h1 className="titulo__comeSano">Comé sano, viví mejor :)</h1>
      <div className="home__tarjetasGrid">
        <Link to={"/categoria/frutos-secos"}>
          <TarjetaGrid
            titulo={"Frutos secos "}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1691788016/CASCANUCES%20SALUDABLE/KoRo-Naturbelassene-Nu_CC_88sse-Gro_C3_9Fpackung-gu_CC_88nstig-online-kaufen-bestellen-onlineshop-ohne-Zucker-ohne-Salz-ohne-Gewu_CC_88rz_q7wze2.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/hierbas"}>
          <TarjetaGrid
            titulo={"Hierbas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692801805/CASCANUCES%20SALUDABLE/HIERVAS/farmacia-angulo-blog-58_aoxfnj.webp"
            }
          />
        </Link>
        <Link to={"/categoria/frutas-desecadas"}>
          <TarjetaGrid
            titulo={"Frutas desecadas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692742176/CASCANUCES%20SALUDABLE/FRUTOS%20DESECADOS/Arandanos-desecados-e1591445229705_e1thvq.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/cereales"}>
          <TarjetaGrid
            titulo={"Cereales"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692744077/CASCANUCES%20SALUDABLE/CEREALES/d_nq_np_758184-mla42735306467_072020-o1-af69ab170adb82d38e16353799434227-640-0_hdbfmg.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/granola"}>
          <TarjetaGrid
            titulo={"Granola"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692746636/CASCANUCES%20SALUDABLE/GRANOLA/receta-basica-granola-casera_1_sepaks.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/legumbres-arroz"}>
          <TarjetaGrid
            titulo={"Legumbres y arroz"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692748449/CASCANUCES%20SALUDABLE/LEGUMBRES%20Y%20ARROZ/download_29_aw5ekf.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/salados"}>
          <TarjetaGrid
            titulo={"Salados"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692752394/CASCANUCES%20SALUDABLE/SALADOS/Maiz-tostado1_y0gmmy.webp"
            }
          />
        </Link>
        <Link to={"/categoria/sales"}>
          <TarjetaGrid
            titulo={"Sales"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692754721/CASCANUCES%20SALUDABLE/SALES/SAL-ROSADA-DEL-HIMALAYA_r8jalr.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/pastas-mani"}>
          <TarjetaGrid
            titulo={"Pastas de mani"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692802886/CASCANUCES%20SALUDABLE/HIERVAS/download_46_zwwdrj.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/harina-avena"}>
          <TarjetaGrid
            titulo={"Harina y avenas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692815332/CASCANUCES%20SALUDABLE/HARINAS%20Y%20AVENAS/harina-de-almendras1-4d993e44b85fbeb45c15887161412979-640-0_r0ce3h.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/reposteria"}>
          <TarjetaGrid
            titulo={"Reposteria"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692817602/CASCANUCES%20SALUDABLE/REPOSTERIA/download_52_ixxctm.jpg"
            }
          />
        </Link>
        <Link to={"/categoria/galletitas"}>
          <TarjetaGrid
            titulo={"Galletitas"}
            imagen={
              "https://res.cloudinary.com/dcf9eqqgt/image/upload/v1692892500/CASCANUCES%20SALUDABLE/GALLETITAS%20SIN%20SAL/screenshot_20210722-225217_2-11-4830c6ba0e376181c716273331020955-640-0_wg5nrr.png"
            }
          />
        </Link>
      </div>
      <FondoFijoProducto />
      <h1 className="home__titulo">Productos en oferta</h1>
      <div className="home__tarjetaProducto"></div>
      <div className="home__tarjetaProducto">
         
        {Object.keys(data).length > 0 ? (
          filtradoNueces.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div> 
        )}
       

        {Object.keys(data).length > 0 ? (
          filtradoAlmendras.map((producto) => (
            <TarjetaHover key={producto.id} producto={producto} />
          ))
        ) : (
          <div className={"tarjetaHome__esqueleton"}>
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
            <Skeleton variant="rectangular" width={290} height={400} />
          </div>
          
        )}
       
      </div>
      <div className="container__tarjeta__carrusel__mobile"  >
      {
        filtradoNueces.length > 0 &&
          <MyCarousel filtradoAlmendras={filtradoNueces}  />
      }
      
      </div>
      <div className="container__tarjeta__carrusel__mobile"  >
      {
        filtradoAlmendras.length > 0 &&
          <MyCarousel filtradoAlmendras={filtradoAlmendras}  />
      }
      </div>
      <div className="home__iconoWhatsapp">
        <IconoWhatsapp />
      </div>

      <FormasPago />
      
     
    
      <div>
      </div>
      
    </div>
    </div>
  );
};

export default Home;
