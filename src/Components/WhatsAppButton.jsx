import React from "react";
import whatsappIcon from "../assets/images/whatsapp.png"; // Adjust the path if necessary


function WhatsAppButton() {
  const handleClick = () => {
    // This will open a new WhatsApp chat window
    window.open("https://wa.me/your-phone-number", "_blank"); // Replace 'your-phone-number' with your actual WhatsApp number
  };

  return (
    <div
      className="z-50 cursor-pointer hover:scale-110 transition duration-300"
      onClick={handleClick}
    >
      <img className="w-[100%] h-[100%]" src={whatsappIcon} alt="WhatsApp" />
    </div>
  );
}

export default WhatsAppButton;
