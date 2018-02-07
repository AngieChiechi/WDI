var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = []
cardsInPlay.push();

var queen = cards[0];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var cardsInPlay = [];
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }

