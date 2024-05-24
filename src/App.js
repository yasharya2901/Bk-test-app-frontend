import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import VerificationPage from './pages/verificationpage/VerificationPage';
import ProfileSetup from './pages/profilesetup/ProfileSetup';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <LoginPage />
      <VerificationPage />
      <ProfileSetup />
      
    </div>
  );
}

export default App;
