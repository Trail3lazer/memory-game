import React from 'react';
import './index.css';

const Deck = (props) => {

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
    let arr = shuffle(props.cards);
    props.setCards(arr);
    return props.cards;
  };

  function shouldShuffle() {
    if (props.shuffle){
        props.setShuffle(false);
        return shuffleCards();
    } else {
        return props.cards;
    }
  }

    return(
        <main className="container">
            {shouldShuffle()}
        </main>
    )
}

export default Deck;