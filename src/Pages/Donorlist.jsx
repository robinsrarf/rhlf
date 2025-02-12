import React from "react";
import "../CSS/Donorlist.css";

const donors = [
  { name: "John Doe", amount: "1000", message: "Keep up the great work!" },
  { name: "Jane Smith", amount: "5000", message: "Happy to contribute!" },
  { name: "Alex Johnson", amount: "2500", message: "Inspiring initiative!" },
];

const DonorList = () => {
  return (
    <div className="donor-list">
      <h2>Recent Donors</h2>
      <ul>
        {donors.map((donor, index) => (
          <li key={index} className="donor-item">
            <div className="donor-info">
              <strong>{donor.name}</strong>
              <span>Donated Rs{donor.amount}</span>
            </div>
            <p className="donor-message">"{donor.message}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonorList;
