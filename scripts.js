const cards = document.querySelectorAll('.memory-card');
console.log(cards, "cards");



//store cards *when the player click the card we have to know is it the first or the second card that he click
let hasFlipedCard = false;
let locakBoard = false;
let firstCard, secondCard;

function flipCards() {
    if(locakBoard) return
    if(this === firstCard) return;
    this.classList.add('flip');

    // to wait untill the unmatched cards to filp back again
    if (!hasFlipedCard) {
        hasFlipedCard = true;
        firstCard = this;
        return;
    }
    // hasFlipedCard = false;
    secondCard = this;
    //the elemnt that the user clicked
    // console.log(this);
    checkForMatch();
}

function checkForMatch() {
    //do cards match
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);
    let isMatch = firstCard.dataset.framework ===
        secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCards)
    secondCard.removeEventListener('click', flipCards)
    console.log('Function executed!');
    resetBoard()
}

function unFlipCards() {
    locakBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip')
        // locakBoard = false
        resetBoard();
    }, 1500)
}
function resetBoard() {
    [hasFlipedCard,locakBoard] = [false,false];
    [firstCard, secondCard] = [null, null]
}

//IIFE function (Immediately Invoked function)
(function shuffle(params) {
    cards.forEach(card => {
        let randomCards  = Math.floor(Math.random() * 12);
        card.style.order = randomCards;
    })  
})();

cards.forEach(card => card.addEventListener('click', flipCards));