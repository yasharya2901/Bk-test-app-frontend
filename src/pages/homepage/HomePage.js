import React from 'react';
import { Button } from '@mui/material';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <br />
      <Button
        variant="contained"
        className="start-test-button"
        onClick={() => { alert('Start Test button clicked'); }}
      >
        Start Test
      </Button>
    </div>
  );
}

export default HomePage;
