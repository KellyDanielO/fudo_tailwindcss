// Open Side Menu
var slide_menu_btn = document.querySelector("#slide_menu_btn");
slide_menu_btn.addEventListener('click', () => {
    let slide_menu = document.querySelector(".side_menu");
    slide_menu.classList.add('active');
});
// Close Side Menu
var slide_close_btn = document.querySelector("#slide_close_btn");
slide_close_btn.addEventListener('click', () => {
    let slide_menu = document.querySelector(".side_menu");
    slide_menu.classList.remove('active');
});

const next = document.querySelector(".next");
var pizza_cont =  document.querySelector('.pizza_cont');
next.addEventListener('click',() => {
    if (window.matchMedia('(min-width: 640px').matches) {
        // For large screen
        pizza_cont.scrollLeft += window.innerWidth * .35;
    }else{
        // For mobile Devices
        pizza_cont.scrollLeft += window.innerWidth * .85;
    }
});
const prev = document.querySelector(".prev");
var pizza_cont =  document.querySelector('.pizza_cont');
prev.addEventListener('click',() => {
    if (window.matchMedia('(min-width: 640px').matches) {
        // For large screen
        pizza_cont.scrollLeft -= window.innerWidth * .35;
    }else{
        // For mobile Devices
        pizza_cont.scrollLeft -= window.innerWidth * .85;
    }
});