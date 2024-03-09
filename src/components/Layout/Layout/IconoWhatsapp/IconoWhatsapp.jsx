import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "../IconoWhatsapp/iconoWhatsapp.css";
const IconoWhatsapp = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza "número" por el número de teléfono al que deseas enviar el mensaje
    // y "mensaje" por el mensaje que deseas enviar.
    const phoneNumber = "3412645481";
    const message =
      "Buen dia! Quiero ponerme en contacto con cascanueces saludable :)";

    // Construye la URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abre la URL en una nueva pestaña del navegador
    window.open(url, "_blank");
  };

  return (
    <div className="iconoWhatsapp">
      <button
        style={{
          border: "none",
          cursor: "pointer",
          backgroundColor: "#25D366",
          borderRadius: "50px",
          padding: "3px",
        }}
        onClick={handleWhatsAppClick}
      >
        <WhatsAppIcon
          fontSize="large"
          color="white"
          style={{
            fontSize: "50px",
            color: "white",
            paddin: "5px",
            backgroundColor: "#25D366",
            borderRadius: "50px",
          }}
        />{" "}
      </button>
    </div>
  );
};

export default IconoWhatsapp;
