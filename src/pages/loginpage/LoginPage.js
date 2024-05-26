import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase'; // Ensure this is the correct path to your firebase config
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setMobileNumber(value);
    }
  };

  const handleSendCode = () => {
    const fullPhoneNumber = `${countryCode}${mobileNumber}`;

    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    signInWithPhoneNumber(auth, fullPhoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        // Save the verification ID in local storage or state as needed
        localStorage.setItem('verificationId', confirmationResult.verificationId);
        // Navigate to the verification page
        navigate('/verification');
      })
      .catch((error) => {
        console.error("Error sending SMS", error);
        alert("Failed to send verification code. Please try again.");
      });
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
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginPage;
