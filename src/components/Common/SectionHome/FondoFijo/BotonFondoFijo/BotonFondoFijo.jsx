import "../BotonFondoFijo/botonFondoFijo.css";
const BotonFondoFijo = ({ text }) => {
  return (
    <div className="fondoFijo__button">
      <button>{text}</button>
    </div>
  );
};

export default BotonFondoFijo;
