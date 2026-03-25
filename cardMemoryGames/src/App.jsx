import React from "react";
import GameHeader from "./components/GameHeader";
import Card from "./components/Card";
import { useState } from "react";
import { useEffect } from "react";

const cardValues = [
  "🍎",
  "🍋‍🟩",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍍",
  "🍎",
  "🍋‍🟩",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍍",
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [prevCard, setPrevCard] = useState({});

  const initializeGame = () => {
    //shuffle the card its not be always in a same order
    const finalCard = cardValues.map((value, index) => ({
      id: index,
      value,
      isFliped: false,
      isMatched: false,
    }));
    setCards(finalCard);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  function handleCardClick(card) {
    // dont allow to process or a click already matched and fliped cards
    if (card.isFliped || card.isMatched) return;

    // updated flip state
    const newCards = cards.map((c) => {
      if (c.id == card.id) {
        return { ...card, isFliped: true };
      } else {
        return c;
      }
    });
    setCards(newCards);

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);
    

//   if (prevCard.value === card.value) {
//   alert("matched");
// } else {
//   if (Object.keys(prevCard).length !== 0) {
//     setTimeout(() => {
//       const newcardsFlip = cards.map((elem) => {
//         if (elem.id === prevCard.id || elem.id === card.id) {
//           return { ...elem, isFliped: false };
//         } else {
//           return elem;
//         }
//       });

//       setCards(newcardsFlip);
//     }, 2000);
//   }
// }



if(flippedCards.length == 1){
  const firstCard  = cards[flippedCards[0]];
 console.log(firstCard);
  if(firstCard.value == card.value){
    
  }else{
    // flip back card 1 filp back card 2
    const flippedBackCard = newCards.map((elem)=>{
      if(newFlippedCards.includes(elem.id)){
        return {...elem,isFliped:false}
      }else{
        return elem
      }
    })
    setCards(flippedBackCard);
  }
}





    // update the previous cards state to new one
    setPrevCard(card);
  }

  return (
    <div className="app">
      <GameHeader score={3} moves={10} />
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card card={card} key={index} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
