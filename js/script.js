let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let removeButton = document.getElementById('get-reservation');
let removeShow = document.getElementById('show-reservation');
let emoji = document.querySelector(".emoji")
let verMas = document.getElementById("ver-mas")
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

// quitar boton para reservar
if (localStorage.getItem('reservacion') == 'true'){
    removeButton.style.display = 'none';
}
if(localStorage.getItem('reservacion') == 'true'){
    removeShow.style.display = 'inline-block';
}

verMas.addEventListener('click', () => {
    emoji.style.display = 'inline-block';
    setTimeout(() => {
        emoji.style.display = 'none'
    }, 1500)
})

