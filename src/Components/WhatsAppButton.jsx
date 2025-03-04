import React from "react";
import whatsappIcon from "../assets/images/whatsapp.png"; // Adjust the path if necessary

function WhatsAppButton() {
  const handleClick = () => {
    // This will open a new WhatsApp chat window
    window.open("https://wa.me/your-phone-number", "_blank"); // Replace 'your-phone-number' with your actual WhatsApp number
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
