import whatsappIcon from "../assets/images/whatsapp.png"; // Adjust the path if necessary

function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/your-phone-number", "_blank");
  };

  return (
    <div
      className="z-50 cursor-pointer transition duration-300 hover:scale-110"
      onClick={handleClick}
    >
      <img className="h-[100%] w-[100%]" src={whatsappIcon} alt="WhatsApp" />
    </div>
  );
}

export default WhatsAppButton;
