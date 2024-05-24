import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, AppBar, Toolbar } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './TestingApp.css';

const questions = [
  { id: 1, text: 'In what year did the United States host the FIFA World Cup for the first time?', options: ['1986', '1994', '2002', '2010'] },
  { id: 2, text: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'] },
  { id: 3, text: 'What is the capital of France?', options: ['Berlin', 'London', 'Madrid', 'Paris'] },
  { id: 4, text: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Ernest Hemingway'] },
  { id: 5, text: 'What is the largest ocean on Earth?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'] },
  { id: 6, text: 'What is the smallest prime number?', options: ['1', '2', '3', '5'] },
  { id: 7, text: 'In what year did the Titanic sink?', options: ['1905', '1912', '1918', '1923'] },
  { id: 8, text: 'Which element has the chemical symbol He?', options: ['Helium', 'Hydrogen', 'Oxygen', 'Neon'] },
  { id: 9, text: 'Who painted the Mona Lisa?', options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'] },
  { id: 10, text: 'What is the square root of 64?', options: ['6', '7', '8', '9'] },
  { id: 11, text: 'Who is known as the father of computers?', options: ['Charles Babbage', 'Alan Turing', 'John von Neumann', 'Steve Jobs'] },
  { id: 12, text: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Platinum'] },
  { id: 13, text: 'What is the currency of Japan?', options: ['Yen', 'Won', 'Ruble', 'Peso'] },
  { id: 14, text: 'Who was the first president of the United States?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'] },
  { id: 15, text: 'What is the longest river in the world?', options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'] },
  { id: 16, text: 'In what year did World War II end?', options: ['1943', '1944', '1945', '1946'] },
  { id: 17, text: 'Which planet is closest to the Sun?', options: ['Earth', 'Venus', 'Mars', 'Mercury'] },
  { id: 18, text: 'Who wrote "1984"?', options: ['George Orwell', 'Aldous Huxley', 'F. Scott Fitzgerald', 'J.D. Salinger'] },
  { id: 19, text: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Pt', 'Pb'] },
  { id: 20, text: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Great White Shark', 'Giraffe'] },
  { id: 21, text: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Great White Shark', 'Giraffe'] }
];

const sectionSize = 10;

const TestingApp = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(7195); // 1 hour, 59 minutes, 55 seconds
  const [currentSection, setCurrentSection] = useState(0);

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

  const handleNextSection = () => {
    setCurrentSection(currentSection + 1);
  };

  const handlePreviousSection = () => {
    setCurrentSection(currentSection - 1);
  };

  const sectionQuestions = questions.slice(currentSection * sectionSize, (currentSection + 1) * sectionSize);

  return (
    <Container className="container">
      <AppBar position="static" className="appBar">
        <Toolbar className="toolbar">
          <Button variant="text" className="endTestButton">End Test</Button>
          <Typography variant="h6" className="sectionTitle">Section-{String.fromCharCode(65 + currentSection)}</Typography>
          <Typography variant="h6" className="timer">
            <AccessTimeIcon /> {formatTime(timeLeft)}
          </Typography>
        </Toolbar>
      </AppBar>
      {sectionQuestions.map((question) => (
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
      <Box className="navigationButtons">
        <Button onClick={handlePreviousSection} disabled={currentSection === 0} className="navButton">Previous</Button>
        <Button onClick={handleNextSection} disabled={(currentSection + 1) * sectionSize >= questions.length} className="navButton">Next</Button>
      </Box>
    </Container>
  );
};

export default TestingApp;


// Admin Pannel


// import React, { useState, useEffect } from 'react';
// import { Container, Typography, Box, Button, Radio, RadioGroup, FormControlLabel, AppBar, Toolbar, TextField } from '@mui/material';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import './TestingApp.css';

// const TestingApp = () => {
//   const [sections, setSections] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(7195); // 1 hour, 59 minutes, 55 seconds
//   const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
//   const [newSectionTitle, setNewSectionTitle] = useState('');
//   const [newQuestionText, setNewQuestionText] = useState('');
//   const [newQuestionOptions, setNewQuestionOptions] = useState('');

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = seconds % 60;
//     return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
//   };

//   const handleAnswerChange = (questionId, answer) => {
//     setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
//   };

//   const handleNextSection = () => {
//     setCurrentSectionIndex(currentSectionIndex + 1);
//   };

//   const handlePreviousSection = () => {
//     setCurrentSectionIndex(currentSectionIndex - 1);
//   };

//   const addSection = () => {
//     setSections([...sections, { title: newSectionTitle, questions: [] }]);
//     setNewSectionTitle('');
//   };

//   const addQuestion = () => {
//     const updatedSections = [...sections];
//     updatedSections[currentSectionIndex].questions.push({
//       id: new Date().getTime(),
//       text: newQuestionText,
//       options: newQuestionOptions.split(',').map(option => option.trim())
//     });
//     setSections(updatedSections);
//     setNewQuestionText('');
//     setNewQuestionOptions('');
//   };

//   const currentSection = sections[currentSectionIndex];

//   return (
//     <Container className="container">
//       <AppBar position="static" className="appBar">
//         <Toolbar className="toolbar">
//           <Button variant="text" className="endTestButton">End Test</Button>
//           <Typography variant="h6" className="sectionTitle">{currentSection ? currentSection.title : 'No Section'}</Typography>
//           <Typography variant="h6" className="timer">
//             <AccessTimeIcon /> {formatTime(timeLeft)}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box className="formBox">
//         <TextField
//           label="New Section Title"
//           value={newSectionTitle}
//           onChange={(e) => setNewSectionTitle(e.target.value)}
//         />
//         <Button onClick={addSection} className="addButton">Add Section</Button>
//       </Box>
//       {currentSection && (
//         <>
//           <Box className="formBox">
//             <TextField
//               label="New Question Text"
//               value={newQuestionText}
//               onChange={(e) => setNewQuestionText(e.target.value)}
//             />
//             <TextField
//               label="New Question Options (comma separated)"
//               value={newQuestionOptions}
//               onChange={(e) => setNewQuestionOptions(e.target.value)}
//             />
//             <Button onClick={addQuestion} className="addButton">Add Question</Button>
//           </Box>
//           {currentSection.questions.map((question) => (
//             <Box key={question.id} className="questionBox">
//               <Typography variant="h6" className="questionText">{question.text}</Typography>
//               <RadioGroup
//                 value={selectedAnswers[question.id] || ''}
//                 onChange={(e) => handleAnswerChange(question.id, e.target.value)}
//               >
//                 {question.options.map((option, index) => (
//                   <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
//                 ))}
//               </RadioGroup>
//             </Box>
//           ))}
//         </>
//       )}
//       <Box className="navigationButtons">
//         <Button onClick={handlePreviousSection} disabled={currentSectionIndex === 0} className="navButton">Previous</Button>
//         <Button onClick={handleNextSection} disabled={currentSectionIndex >= sections.length - 1} className="navButton">Next</Button>
//       </Box>
//     </Container>
//   );
// };

// export default TestingApp;
