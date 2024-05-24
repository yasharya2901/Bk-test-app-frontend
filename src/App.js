import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage/LoginPage';
import VerificationPage from './pages/verificationpage/VerificationPage';
import ProfileSetup from './pages/profilesetup/ProfileSetup';
import Results from './pages/Resultspage/Results';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
