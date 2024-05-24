import React, { useState } from 'react';
import './VerificationPage.css';

const VerificationPage = () => {
  const [code, setCode] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerifyCode = () => {
    alert(`Code entered is ${code.join('')}`);
  };

  return (
    <div className="verification-container">
      <h2>Enter your pincode below.</h2>
      <h1>Confirm your Code</h1>
      <div className="code-inputs">
        {code.map((data, index) => {
          return (
            <input
              key={index}
              type="text"
              name="code"
              maxLength="1"
              value={data}
              onChange={e => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
            />
          );
        })}
      </div>
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default VerificationPage;
