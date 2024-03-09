import { createContext, useState } from "react";

export const CartContext = createContext(); //Se crea el contexto global


const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorito, setFavorito] = useState([]); //ESTADO DE SECTION FAVORITOS
  const [usuarioOn, setUsuarioOn] = useState(false); //ESTADO SECTION CUENTA INICIADA O NO INICIADA
  const [user, setUser] = useState({});

  const addToCart = (item) => {
    const existe = existCart(item.id);
    if (existe) {
      let nuevoArray = cart.map((producto) => {
        //tener en cuenta que el map devuelve un nuevo array y en cada vuelta se an agregando los elementos ==> [ {1} {2} {3} ]
        if (producto.id === item.id) {
          return { ...item, cantidad: item.cantidad };
        } else {
          return producto;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, item]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  const existCart = (id) => {
    const exist = cart.some((producto) => producto.id === id);
    return exist;
  };
  const existFavorito = (id) => {
    const exist = favorito.some((producto) => producto.id === id);
    return exist;
  };
  const deleteCart = (id) => {
    const newArr = cart.filter((producto) => producto.id !== id);
    setCart(newArr);
  };
  const calcularFinal = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.cantidad;
    }, 0);
    return total;
  };
  const calcularTotalProductos = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };
  const addFavorito = (objeto) => {
    const existe = existFavorito(objeto.id);
    if (existe) {
      let nuevoArray = favorito.map((producto) => {
        //tener en cuenta que el map devuelve un nuevo array y en cada vuelta se an agregando los elementos ==> [ {1} {2} {3} ]
        if (producto.id === objeto.id) {
          return { ...objeto, cantidad: objeto.cantidad };
        } else {
          return producto;
        }
      });
      setFavorito(nuevoArray);
    } else {
      setFavorito([...favorito, objeto]);
    }
  };
  const eliminarFavorito = (id) => {
    let nuevo = favorito.filter((producto) => producto.id !== id);
    setFavorito(nuevo);
  };
  const logout = () => {
    localStorage.removeItem("userData");
    setUsuarioOn(false);
    setUser({});
  };
  let data = {
    cart,
    clearCart,
    deleteCart,
    addToCart,
    calcularFinal,
    calcularTotalProductos,
    favorito,
    addFavorito,
    setFavorito,
    eliminarFavorito,
    existFavorito,
    usuarioOn,
    setUsuarioOn,
    user,
    setUser,
    logout
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
};

export default CartContextComponent;
