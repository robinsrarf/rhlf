// src/Pages/RefundPolicy.jsx
import React from 'react';
import '../../CSS/Css/RefundPolicy.css'; // Import the CSS file

const RefundPolicy = () => {
    return (
        <div className="refund-policy-container">
            <h1 className="refund-policy-title">Refund Policy</h1>
            <ul>
                <li>Real Happiness Of Life Foundation has instituted a donation refund policy to ensure fair and transparent processing of requests for refund of donations as digital payments are becoming more frequent.</li>
                <li>Real Happiness Of Life Foundation expects that all donors will exercise due care and diligence while making donations.</li>
                <li>Real Happiness Of Life Foundation also recognizes that a donation may be made erroneously or donors may change their mind.</li>
                <li>Real Happiness Of Life Foundation will examine requests for refund of donations and endeavor to make the refund.</li>
                <li>Real Happiness Of Life Foundation may also seek proper explanation and reason from the user.</li>
                <li>It will require further verification of the user and need documents of proof as well as for the donation.</li>
                <li>Real Happiness Of Life Foundation is not obliged to make refunds and may, in its discretion, decline any requests for refund of donations, particularly if a tax exemption certificate has been issued.</li>
            </ul>
            <h2>Contact Information</h2>
            <p>
                Real Happiness Of Life Foundation<br />
                H. No. 4453 Sathe Nagar Near Manoj Kirana Store Narpoli Bhiwandi Thane, Maharashtra- 421305, India
            </p>
            <h2>WRITE TO US</h2>
            <p>
                <a href="mailto:donor@rhlf.org">donor@rhlf.org</a>
            </p>
            <h2>Refund Request Details</h2>
            <p>
                Your refund request must contain the details such as Date of Donation, Amount of Donation, Mode of Donation i.e. Credit Card or Online Payment and should reach Real Happiness Of Life Foundation office within 7 (Seven) days from the date on which you made the donation i.e.:
            </p>
            <ul>
                <li>The date on which you made the donation online, electronically or through other means,</li>
                <li>The date on which you handed over the cheque/demand draft to Real Happiness Of Life Foundation or someone authorized by Real Happiness Of Life Foundation for this purpose,</li>
                <li>The date on which you dispatched the cheque/demand draft to Real Happiness Of Life Foundation by other means.</li>
            </ul>
            <p>
                The refund process may take time 7 to 30 working days depending on the availability of the information from third parties such as Payment Gateway, Banks, etc. through which the transaction is done.
            </p>
        </div>
    );
};

export default RefundPolicy;