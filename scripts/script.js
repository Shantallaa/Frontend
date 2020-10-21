// // JavaScript Document
var menuButton = document.querySelector("header button");
var header = document.querySelector("header");
var h1 = document.querySelector('.verander')

function menuClass() { 
	header.classList.toggle('menu');
}

menuButton.addEventListener("click", menuClass);


// Bron: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/


var h2 = document.getElementsByTagName("h2")[1];

var isInViewport = function (element) {
    var header = element.getBoundingClientRect("h2");
    return (
        header.top >= 50 &&
        header.left >= 0 &&
        header.bottom <= -500 + (window.innerHeight || document.documentElement.clientHeight) &&
        header.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


function toggle () {
	if (isInViewport(h2)) {
    h2.classList.add('show')
    }
	else {
	h2.classList.remove('show')


	}
}

window.addEventListener('scroll',toggle);


// window.addEventListener('scroll', function(e) {
//   element.getBoundingClientRect().top < 50 ? showHeader : hideHeader();
// });


// Bron: https://jsfiddle.net/pvn4esg0/4/

// De HTML voor de heading 
    // <div id="sticky">
    //     <h1>Creating Fun</h1>
    //     <h1 class='verander'>Expanding Horizons</h1>
    //   </div>
    //  + ID namen voor de articles

// function sticky_relocate() {
// var window_top = $(window).scrollTop();
// var div_top = $('main section').offset().top;
// if (window_top > div_top) {
//     $('main section h1').addClass('stick');
// } 
// else {
//     $('main section h1').removeClass('stick');
// }
// }

// $(function () {
//     $(window).scroll(function(){
//       sticky_relocate();
//       if(SectionChange($('#article2')) === true){
//          $('#sticky').find(h1).text('Makes Exercising Easier').css('color' , '#01D7FE');
//       }else if(SectionChange($('#article3')) === true){
//          $('#sticky').find(h1).text('Adds Flavor to Everyday Life').css('color' , '#7CFFD9');
//       }else if(SectionChange($('#article4')) === true){
//          $('#sticky').find(h1).text('for Personal Finance').css('color' , '#F7C530');
//       }else if(SectionChange($('#article5')) === true){
//          $('#sticky').find(h1).text('is Both a Skill and an Art').css('color' , '#9F31BD');
//             }else if(SectionChange($('#article6')) === true){
//          $('#sticky').find(h1).text('for Personal Finance').css('color' , '#8BC53F');
//       }else if(SectionChange($('#article7')) === true){
//          $('#sticky').find(h1).text('is Both a Skill and an Art').css('color' , '#03FBCD');
//       }else{
//         $('#sticky').find(h1).text('Expanding Horizons').css('color' , '#ffffff');
//       }
//     });
// });


// function SectionChange(section_id){
//    return ($(window).scrollTop() > $(section_id).offset().top 
//          && $(window).scrollTop() < $(section_id).offset().top + $(section_id).outerHeight(true)) ? true : false;
// }