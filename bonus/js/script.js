// creo 3 costanti contenenti
// la classe dell'icona dell'hamburger menu
// la classe dell'icona per chiudere il menu
// la classe dell'hamburger menu
const button = document.querySelector('.fa-bars');
const closeButton = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger-menu');

// creo un evento al click dell'hamburger con una funzione
button.addEventListener('click', function () {
    hamburger.classList.add('active');
})

// creo un evento al click dell'icona di chiusura con una funzione
closeButton.addEventListener('click', function () {
    hamburger.classList.remove('active');
})

// ------------------------------------------------

const clickMe = document.getElementById('orange');

let clickCounter = 0;

clickMe.addEventListener('click', function(){
    clickCounter++;  

    if (clickCounter === 1){
        clickMe.classList.add('rounded');
        clickMe.innerHTML = `Bravo <br/> hai cliccato ${clickCounter} volta!`
    } else if (clickCounter === 5){
        clickMe.classList.add('rounded');
        clickMe.innerHTML = `Non ti sembra di esagerare?`
    } else if (clickCounter === 7){
        clickMe.classList.add('rounded');
        clickMe.innerHTML = `Non hai niente di meglio da fare?`
    } else if (clickCounter %2 !== 0) {
        clickMe.classList.add('rounded');
        clickMe.innerHTML = `Ancora?? <br/> hai già cliccato ${clickCounter} volte!!`
    } else {
        clickMe.classList.remove('rounded');
        clickMe.innerHTML = `Cliccami`
    }


})