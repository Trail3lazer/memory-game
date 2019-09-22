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
  const [topic, setTopic] = useState("theOffice");

  function highScoreCheck() {
    if (topScore < score)
      setTopScore(score)
  }

  const newImgClicked = () => {
    setCorrect(true);
    setScore(score + 1);
    highScoreCheck();
  }

  const badImgClicked = () => {
    setCorrect(false);
    highScoreCheck();
    setScore(0);
  }

  const onClick = (alreadyPicked) => {
    if (alreadyPicked === true) {
      badImgClicked();
    } else {
      newImgClicked();
      shuffleCards();
    }
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const shuffleCards = () => {
    let arr = shuffle(cards);
    return setCards(arr);
  };

  const cardsArr = [];
  images[topic].map((link, index) => {
    return cardsArr.push(<Card onClick={onClick} link={link} correct={} key={link}/>)
  });

  const [cards, setCards] = useState(cardsArr);

  return (
    <div>
      <Navbar correct={correct} score={score} topScore={topScore} />
      <Header />
      <Deck cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
