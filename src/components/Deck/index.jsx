import React, { useState } from 'react';
import './index.css';
import images from '../../resources/images/cardImages'
import Card from '../Card'

const Deck = (props) => {
  const [picked, setPicked] = useState([]);
  const [cards, setCards] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  function pushPicked(data) {
    picked.push(data)
  }

  function initCards(images, topic) {
  if(images[topic]){
      cards.length = 0;
    return images[topic].map(function (link) {
      return cards.push(link)
    })}
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

  function deckHandler(correct) {
    if (!correct) {
      initCards(images, props.topic);
    }
    if (!shuffled) { setCards(shuffle(cards)); setShuffled(true) }
    return cards.map((link) => {
      return <Card alreadyClicked={props.clickCheck} link={link} setShuffled={setShuffled} picked={picked} pushPicked={pushPicked} setPicked={setPicked} key={link} />;
    });
  }

  return (
    <main className={props.topic==='Marvel'? "container-fluid clearfix pb-5 px-5 mx-5" : 'container clearfix pb-5'}>
      {deckHandler(props.correct)}
    </main>
  )
}

export default Deck;