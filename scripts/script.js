// // JavaScript Document
var menuButton = document.querySelector("header button");
var header = document.querySelector("header");
var h1 = document.querySelector('.verander')

function menuClass() { 
	header.classList.toggle('menu');
}

menuButton.addEventListener("click", menuClass);


// Bron: https://jsfiddle.net/pvn4esg0/4/

function sticky_relocate() {
var window_top = $(window).scrollTop();
var div_top = $('main section').offset().top;
if (window_top > div_top) {
    $('main section h1').addClass('stick');
} 
else {
    $('main section h1').removeClass('stick');
}
}

$(function () {
    $(window).scroll(function(){
      sticky_relocate();
      if(SectionChange($('#article2')) === true){
         $('#sticky').find(h1).text('Makes Exercising Easier').css('color' , '#01D7FE');
      }else if(SectionChange($('#article3')) === true){
         $('#sticky').find(h1).text('Adds Flavor to Everyday Life').css('color' , '#7CFFD9');
      }else if(SectionChange($('#article4')) === true){
         $('#sticky').find(h1).text('for Personal Finance').css('color' , '#F7C530');
      }else if(SectionChange($('#article5')) === true){
         $('#sticky').find(h1).text('is Both a Skill and an Art').css('color' , '#9F31BD');
            }else if(SectionChange($('#article6')) === true){
         $('#sticky').find(h1).text('for Personal Finance').css('color' , '#8BC53F');
      }else if(SectionChange($('#article7')) === true){
         $('#sticky').find(h1).text('is Both a Skill and an Art').css('color' , '#03FBCD');
      }else{
        $('#sticky').find(h1).text('Expanding Horizons').css('color' , '#ffffff');
      }
    });
});


function SectionChange(section_id){
   return ($(window).scrollTop() > $(section_id).offset().top 
         && $(window).scrollTop() < $(section_id).offset().top + $(section_id).outerHeight(true)) ? true : false;
}