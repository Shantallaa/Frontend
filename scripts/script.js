// // JavaScript Document
var menuButton = document.querySelector("header button");
var header = document.querySelector("header");

function menuClass() { 
	header.classList.toggle('menu');
}

menuButton.addEventListener("click", menuClass);