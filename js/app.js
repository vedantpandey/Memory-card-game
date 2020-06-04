/*
 * Create a list that holds all of your cards
*/

let reset = document.querySelector('.fa-repeat');

reset.addEventListener('click', function () {
    let cardList = document.querySelectorAll('.card');
    let contarr = [];
    for(let i=0;i<cardList.length;i++){
        let par = cardList[i];
        let ch = par.firstElementChild;
        contarr.push(ch);
        ch.remove();
    }

    shuffle(contarr);

    for(let i=0;i<cardList.length;i++){
        let par = cardList[i];
        let ch = contarr[i];
        par.appendChild(ch);
    }
});
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function displayCard(ele){
    let clist = ele.classList;
    clist.add('open');
    clist.add('show');
}

let deckEl = document.querySelector('.deck');
let openedCard,target;
let ctr=0;

deckEl.addEventListener('click', function (evt) {
    target = evt.target;
    if(target.nodeName == "LI" || target.nodeName == "I"){

        if(ctr == 0){
            displayCard(target);
            ctr = 1;
            openedCard = target;
        }

        else if(ctr == 1){
            displayCard(target);
            ctr = 0;
            
            if(target.firstElementChild.className == openedCard.firstElementChild.className)
                Matchcard();
            else{
                MismatchCard();
            }
                
        }
    }
});

function Matchcard(){
    let c1 = openedCard.classList;
    let c2 = target.classList;

    c1.remove('open');
    c1.remove('show');
    c2.remove('open');
    c2.remove('show');

    c1.add('match');
    c2.add('match');
}


function MismatchCard(){
    let c1 = openedCard.classList;
    let c2 = target.classList;

    c1.remove('open');
    c1.remove('show');
    c2.remove('open');
    c2.remove('show');

    c1.add('wrong');
    c2.add('wrong');

    aftermismatch();
}

function remove(){
    let c1 = openedCard.classList;
    let c2 = target.classList;

    c1.remove('open');
    c1.remove('show');
    c2.remove('open');
    c2.remove('show');
    c1.remove('wrong');
    c2.remove('wrong');
    
}

function aftermismatch(){
    setTimeout(remove, 1000);
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
