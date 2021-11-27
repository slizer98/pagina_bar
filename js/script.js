let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

let texto = "Hola a todos. Nosotros somos el equipo 2, y nuestro proyecto es sobre un bar"
const hablar = (texto) => speechSynthesis.
speak(new SpeechSynthesisUtterance(texto));
function presentacion(){
    hablar(texto)
}

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src= src;
    }
})
let show_items = document.querySelector('.shopping-cart');
let car = document.querySelector('.car');
let body = document.querySelector('body');


car.onclick = () =>{
    show_items.classList.toggle('activate');
}

