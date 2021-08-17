import './App.css';
import MemoryCard from './components/MemoryCard';
import React from 'react';



const generateDeck = () => {
  let symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  let deck = [];
  for (let index = 0; index < symbols.length * 2; index++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[index % 8]
    })

  }
  return shuffle(deck)
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {

      deck: generateDeck(),
      pickedCards: []
    }
  }
  pickedCard = (cardIndex) => {
    const cardToFlip = { ...this.state.deck[cardIndex] }

    if (this.state.deck[cardIndex].isFlipped) {
      return;

    }
    cardToFlip.isFlipped = true

    let newPickedCards = [...this.state.pickedCards,cardIndex]
    // console.log(newPickedCards)
    const newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip
      }
      return card
    });
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0]
      const card2Index = newPickedCards[1]
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => { this.unflipCards(card1Index, card2Index) }, 1000);
      }
      newPickedCards = [];
    }
    this.setState({
      deck: newDeck,
      pickedCards: newPickedCards
    });

  }
  unflipCards(card1Index, card2Index)  {
      const card1 = { ...this.state.deck[card1Index] };
      const card2 = { ...this.state.deck[card2Index] };
      card1.isFlipped = false;
      card2.isFlipped = false;

      const newDeck = this.state.deck.map((card, index) => {
        if (card1Index === index) {
          return card1;
        } if (card2Index === index) {
          return card2;
        } 
        return card;
      })

      this.setState({ deck: newDeck })
    };


  render() {
    const cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard clickHandler={() => this.pickedCard(index)}
        key={index} symbol={card.symbol}
        isFlipped={card.isFlipped} />
    });
    return (

      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h3>Match each pair and you win!</h3>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>

      </div>
    )

  }

}

export default App;
