const drop = document.querySelector('.desktop-menu');
const user = document.querySelector('.navbar-email');

user.addEventListener('click' , desplegar);

function desplegar(){
    drop.classList.toggle("active");
}