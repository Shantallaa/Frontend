// // JavaScript Document
menuButton = document.querySelector("nav div")
nav = document.querySelector("nav")

function menuClass() { nav.classList.toggle('menu');}

menuButton.addEventListener("click", menuClass)