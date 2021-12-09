// creo 3 variabili contenenti
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
