import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../Context/CartContext";

const Carrito = () => {
  const { cart, calcularTotalProductos } = useContext(CartContext);

  return (
    <>
      <div>
        <Link to={"/cart"}>
          <Badge
            badgeContent={calcularTotalProductos()}
            color="error"
            style={{ color: "black", cursor: "pointer" }}
          >
            <ShoppingCartIcon fontSize="large" />
          </Badge>
        </Link>
      </div>
    </>
  );
};
export default Carrito;
