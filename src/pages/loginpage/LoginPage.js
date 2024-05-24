import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendCode = () => {
    // Handle sending the code logic here
    alert(`Code sent to ${mobileNumber}`);
  };

  return (
    <div className="om-shanti-container">
      <h1>OM Shanti</h1>
      <input
        type="text"
        placeholder="Enter your Mobile number"
        value={mobileNumber}
        onChange={handleInputChange}
      />
      <button onClick={handleSendCode}>Send Code</button>
    </div>
  );
};

export default LoginPage;
