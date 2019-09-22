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
  let [cards, setCards] = useState([]);
  const [shuffle, setShuffle] = useState(false);
  const [topic,] = useState("theOffice");

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

  const onClick = (alreadyPicked) => {
    if (alreadyPicked === true) {
      badImgClicked();
    } else {
      newImgClicked();
      setShuffle(true);
    }
  }

  function initCards() {
    cards = [];
    images[topic].map(function(link) {
    return cards.push(<Card click={onClick} link={link} correct={correct} setCorrect={setCorrect} key={link} />)
  });}

  // function setCards(arr) {
  //   cards = arr;
  // };

  initCards()

  return (
    <div>
      <Navbar correct={correct} score={score} topScore={topScore} />
      <Header />
      <Deck setCards={setCards} cards={cards} shuffle={shuffle} setShuffle={setShuffle} />
      <Footer />
    </div>
  );
}

export default App;
