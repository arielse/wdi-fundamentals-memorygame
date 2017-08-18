var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    var match = document.createElement('p');
    match.setAttribute('class', 'matched');
    match.textContent = "You Found A Match!";
    document.getElementById('instructions').appendChild(match);
  } else {
    var noMatch = document.createElement('p');
    noMatch.setAttribute('class', 'nonMatch');
    noMatch.textContent = "No Match, Try Again!";
    document.getElementById('instructions').appendChild(noMatch);;
  }
}
var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

var createBoard = function () {
  for (var i = 0; i <= 3; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

createBoard();
