import React from 'react';
import './authenticate.css';
function authenticate() {
  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form>
        <label htmlFor="username">Username or User ID:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default authenticate;