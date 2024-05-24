import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import VerificationPage from './pages/verificationpage/VerificationPage';
import ProfileSetup from './pages/profilesetup/ProfileSetup';
// import Results from './pages/results/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestingApp from './pages/TestPage/TestingApp';

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
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
        <Route path="/Test" element={<TestingApp />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
