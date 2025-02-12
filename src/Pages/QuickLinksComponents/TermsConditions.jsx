// src/Pages/TermsAndConditions.jsx
import React from 'react';
import '../../CSS/Css/TermsConditions.css'; // Import the CSS file

const TermsAndConditions = () => {
    return (
        <div className="terms-conditions-container">
            <h1 className="terms-conditions-title">Terms and Conditions</h1>
            <p>
                Use of the website is provided by Real Happiness Of Life Foundation subject to the following Terms and Conditions:
            </p>
            <p>
                By using this website you are accepting the terms and conditions. They are effective from your first visit.
            </p>
            <ul>
                <li>Real Happiness Of Life Foundation may change these terms and conditions from time to time; your use of the website indicates your acceptance of the terms and conditions at the time of use.</li>
                <li>Real Happiness Of Life Foundation reserves the right to change the content of the website at any time.</li>
                <li>Real Happiness Of Life Foundation has taken every precaution to make sure the content of this website is accurate and legally correct at the time of appearance. If you believe the content of any of our pages is inaccurate please contact us, email: <a href="mailto:info@rhlf.org">info@rhlf.org</a>.</li>
                <li>Real Happiness Of Life Foundation accepts no liability for loss or damage, including personal injury, resulting from use of this website.</li>
                <li>Real Happiness Of Life Foundation makes all reasonable efforts to make sure malware or viruses are not transmitted from this website; however, this cannot be guaranteed. We recommend that you safeguard your IT equipment before downloading information and files.</li>
                <li>Real Happiness Of Life Foundation will not accept liability for damage caused by viruses.</li>
                <li>When we provide links to other websites it does not mean that we approve of or endorse the views and information contained in the website. We accept no liability for damage caused by malware or viruses on websites that we have linked to.</li>
                <li>Please request permission before using our logos or other branded material. We reserve the right to require our logo to be removed from websites or printed material if it is not in our interests.</li>
                <li>Our downloadable documents, brochures, and web pages are provided for your use. You may copy or print the information for private purposes including teaching. You may not amend the content or use it for commercial purposes without Real Happiness Of Life Foundation's written consent.</li>
                <li>Images and photos used on this website are the property of Real Happiness Of Life Foundation or other copyright owners. They may not be reproduced or used without Real Happiness Of Life Foundation or the copyright owner’s written consent.</li>
                <li>If there is any conflict between these terms and conditions and rules or specific terms of use relating to specific material then the latter shall prevail.</li>
            </ul>
        </div>
    );
};

export default TermsAndConditions;