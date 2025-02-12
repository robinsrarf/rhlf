import React from 'react';
import whatsappIcon from '../assets/images/whatsapp.png'; // Adjust the path if necessary
import '../CSS/WhatsAppButton.css'; // Import the CSS

function WhatsAppButton() {
  const handleClick = () => {
    // This will open a new WhatsApp chat window
    window.open('https://wa.me/your-phone-number', '_blank'); // Replace 'your-phone-number' with your actual WhatsApp number
  };

  return (
    <div 
      className="fixed bottom-8 right-6 z-50 cursor-pointer fixed-button" // Add the class here
      onClick={handleClick}
      style={{
        width: '55px', 
        height: '55px', 
      }}
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        style={{
          width: '100%', 
          height: '100%', 
        }} 
      />
    </div>
  );
}

export default WhatsAppButton;
