import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setMobileNumber(value);
    }
  };

  const handleSendCode = () => {
    // Handle sending the code logic here
    alert(`Code sent to ${countryCode}${mobileNumber}`);
  };

  return (
    <div className="om-shanti-container">
      <h1>OM Shanti</h1>
      <div className="input-container">
        <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
          <option value="+1">+1</option>
          <option value="+91">+91</option>
          {/* Add more options as needed */}
        </select>
        <input
          type="tel"
          placeholder="Enter your Mobile number"
          value={mobileNumber}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSendCode}>Send Code</button>
    </div>
  );
};

export default LoginPage;