import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header'
import Deck from './components/Deck'
import Card from './components/Card'
import Footer from './components/Footer'
import images from './resources/images/cardImages'

import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [correct, setCorrect] = useState(null);
  let cards = [];
  const picked = [];
  const [topic,] = useState("theOffice");

  function setCards(arr) {
    cards = arr;
  };

  function resetPicked() {
    picked.length = 0;
  }

  function pushPicked(link) {
    picked.push(link)
  }

  function highScoreCheck() {
    if (topScore < score)
      setTopScore(score)
  }

  const badImgClicked = () => {
    setCorrect(false);
    highScoreCheck();
    setScore(0);
    resetPicked();
  }

  const newImgClicked = () => {
    setCorrect(true);
    setScore(score + 1);
    highScoreCheck();
  }

  const onClick = (alreadyPicked) => {
    if (alreadyPicked === true) {
      badImgClicked();
    } else {
      newImgClicked();
    }
  }

  function initCards() {
    let cardsArr = [];
    images[topic].map(function(link) {
      return cardsArr.push(<Card click={onClick} link={link} picked={picked} pushPicked={pushPicked} resetPicked={resetPicked} key={link} />)
    });
    return cardsArr;
  }

  setCards(initCards());

  return (
    <div>
      <Navbar correct={correct} score={score} topScore={topScore} />
      <Header />
      <Deck setCards={setCards} cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
