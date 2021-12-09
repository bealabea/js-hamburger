// creo 3 variabili contenenti
// la classe dell'icona dell'hamburger menu
// la classe dell'icona per chiudere il menu
// la classe dell'hamburger menu
const button = document.querySelector('.fa-bars')
const close = document.querySelector('.close')
const hamburger = document.querySelector('.hamburger-menu');

// creo un evento al click dell'hamburger con una funzione
// al click il display cambia da none a block
button.addEventListener('click', function () {
        hamburger.style.display ="block";
})

close.addEventListener('click', function () {
    hamburger.style.display ="none";
})
