/*<div className="section-3 text-start">
  <h3 className="section-title font-bold text-xl max-md:ml-10">Quick Links</h3>
  <div className="space-y-2 lg:text-start flex flex-col max-md:ml-1 max-md:text-center">
    {[
      { name: "Privacy Policy", type: "pdf", link: "/path-to-privacy-policy.pdf" },
      { name: "Terms & Condition", type: "page", link: "/terms" },
      { name: "Refund Policy", type: "pdf", link: "/path-to-refund-policy.pdf" },
      { name: "Child Protection Policy", type: "page", link: "/child-protection" },
      { name: "Posh Policy", type: "page", link: "/posh" },
    ].map(item => (
      <p
        className="text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer"
        key={item.name}
        onClick={() => {
          if (item.type === "pdf") {
            // Open PDF in a new tab
            window.open(item.link, "_blank");
          } else {
            // Navigate to a page
            window.location.href = item.link;
          }
        }}
      >
        {item.name}
      </p>
    ))}
  </div>
</div>

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// ... other imports

function Footer() {
    return (
        <div className='footer-container'>
            {/* ... other sections *//*}
            <div className="section-3 text-start">
                <h3 className='section-title font-bold text-xl max-md:ml-10'>Quick Links</h3>
                <div className='space-y-2 lg:text-start flex flex-col max-md:ml-1 max-md:text-center'>
                    <Link to="/privacy-policy" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
                        Privacy Policy
                    </Link>
                    <Link to="/terms-and-conditions" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
                        Terms & Condition
                    </Link>
                    <Link to="/refund-policy" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
                        Refund Policy
                    </Link>
                    <a href="../assets/POSH_at_workplace.pdf" target="_blank" rel="noopener noreferrer" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
                        Child Protection Policy
                    </a>
                    <a href="../assets/Child_Protection_Policy.pdf" target="_blank" rel="noopener noreferrer" className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer'>
                        Posh Policy
                    </a>
                </div>
            </div>
            {[
            { name:"Privacy Policy", type:"page", link:"/privacyPolicy"},
            { name:"Terms & Condition", type:"page", link:"/termsAndCondition"},
            { name:"Refund Policy", type:"page", link:"/RefundPolicy"},
            { name:"Child Protection Policy", type:"pdf", link:"/childprotectionpolicy"},
            { name:"Posh Policy", type:"pdf", link:"/PoshPolicy"}
          ].map(item => (
            <p className='text-black hover:text-gray-400 transition-colors duration-300 cursor-pointer '
              key={item.name}
              OnClick={() => {
                if(item.type ==="pdf"){
                  window.open(item.link, "_blank");
                } else {
                  window.location.href = item.link;
                }
              }}>
                {item.name}
            </p>
          ))}
          </div>*/