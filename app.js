// list of all cards store in memory
const cards = document.querySelectorAll('.memory-card')

// when player flips card, we have to know if it's the first or second card, below is the logic for it
let hasBeenFlipped = false;
let firstCard, secondCard;

// this will loop through my list
function flipCard() {
    this.classList.toggle('flip');
    // toggle means if the class is there, remove it, if it is there, add it.
    if (!hasBeenFlipped) {
        // first click of the card
        hasBeenFlipped = true;
        firstCard = this;
    } else {
        // second click of the card
        hasBeenFlipped = false;
        secondCard = this;

        console.log({firstCard, secondCard});
    }
}

// event listener
cards.forEach(card => card.addEventListener('click', flipCard))