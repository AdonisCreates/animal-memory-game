// list of all cards store in memory
const cards = document.querySelectorAll('.memory-card')

// this will loop through my list
function flipCard() {
    this.classList.toggle('flip');
    console.log("I've been clicked!");
    // toggle means if the class is there, remove it, if it is there, add it.
}

// event listener
cards.forEach(card => card.addEventListener('click', flipCard))