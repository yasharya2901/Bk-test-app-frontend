import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, AppBar, Toolbar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './TestingApp.css';

const questions = [
  { id: 1, text: 'In what year did the United States host the FIFA World Cup for the first time?', options: ['1986', '1994', '2002', '2010'] },
  { id: 2, text: 'In what year did the United States host the FIFA World Cup for the first time?', options: ['1986', '1994', '2002', '2010'] },
  { id: 3, text: 'In what year did the United States host the FIFA World Cup for the first time?', options: ['1986', '1994', '2002', '2010'] },
];

const TestingApp = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(7195); // 1 hour, 59 minutes, 55 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  return (
    <Container className="container">
      <AppBar position="static" className="appBar">
        <Toolbar className="toolbar">
          <Button variant="text" className="endTestButton">End Test</Button>
          <Typography variant="h6" className="sectionTitle">Section-A</Typography>
          <Typography variant="h6" className="timer">
            <AccessTimeIcon /> {formatTime(timeLeft)}
          </Typography>
        </Toolbar>
      </AppBar>
      {questions.map((question) => (
        <Box key={question.id} className="questionBox">
          <Typography variant="h6" className="questionText">{question.text}</Typography>
          <RadioGroup
            value={selectedAnswers[question.id] || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
          >
            {question.options.map((option, index) => (
              <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </Box>
      ))}
      <Button className="nextButton">Next</Button>
    </Container>
  );
};

export default TestingApp;
