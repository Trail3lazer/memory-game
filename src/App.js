import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Deck from './components/Deck'
import Footer from './components/Footer'
import Dropdown from './components/Dropdown'


import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [correct, setCorrect] = useState(null);
  const [topic, setTopic] = useState("The_Office");

  function highScoreCheck() {
    if (topScore < score)
      setTopScore(score)
  }

  const badImgClicked = () => {
    setCorrect(false);
    highScoreCheck();
    setScore(0);
  }

  const newImgClicked = () => {
    setCorrect(true);
    setScore(score + 1);
    highScoreCheck();
  }

  const clickCheck = (alreadyPicked) => {
    if (alreadyPicked === true) {
      badImgClicked();
    } else {
      newImgClicked();
    }
  }

  return (
    <div>
      <Navbar correct={correct} score={score} topScore={topScore} />
      <Header />
      <Dropdown topic={topic} setTopic={setTopic} setCorrect={setCorrect} />
      <Deck topic={topic} clickCheck={clickCheck} correct={correct}/>
      <Footer />
    </div>
  );
}

export default App;
