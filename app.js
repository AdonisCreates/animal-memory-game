// list of all cards store it it in memory if 'cards'
// document.querySelectorAll is a method and returns all elements in the document that matches a specified CSS selector(s)
// it's also static 
const cards = document.querySelectorAll('.memory-card');

// when player flips card, we have to know if it's the first or second card, below is the logic for it
// why do we set it to false? 
let hasBeenFlipped = false;
let firstCard, secondCard;

// store it in let in case we need to change 


const startGame = () => {
    alert('Press ok to start the memory game. If you match all cards, you win. If you can not... you LOSE!');
    // finish filling out this function so it:
      // shows status
      // asks for action
  }

// refactor in a for of loop?
// 
// this will loop through my list
function flipCard() {
    this.classList.toggle('flip');
    // toggle means if the class is there, remove it, if it is there, add it.
    // ! is set to not
    if (!hasBeenFlipped) {
        // first click of the card
        hasBeenFlipped = true;
        firstCard = this;
    } else {
        // second click of the card
        hasBeenFlipped = false;
        secondCard = this;

        // checking if cards are matching
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // this will check if it is a match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        }   // this will flip it around if it's not a match
            else {
                // set time out, to flip the cards back
                setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1000);         
        
    }
}

};
startGame();
// event listener to click my cards
cards.forEach(card => card.addEventListener('click', flipCard));