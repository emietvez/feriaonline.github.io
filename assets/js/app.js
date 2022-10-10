const drop = document.querySelector('.desktop-menu');
const user = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const menu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const single = document.querySelector('.single-product');
const productCard = document.querySelector('.product-card');
const singleClose = document.querySelector('.single-product-close')



user.addEventListener('click' , function(){
    single.classList.remove('active')
    aside.classList.remove('active');
    drop.classList.toggle("active");
});

burgerMenu.addEventListener('click', function(){
    single.classList.remove('active')
    aside.classList.remove('active')
    menu.classList.toggle('active-menu')
});

menuCart.addEventListener('click' , function(){
    single.classList.remove('active')
    drop.classList.remove("active");
    menu.classList.remove('active-menu')
    aside.classList.toggle('active')
});

productCard.addEventListener('click' , function(){
    aside.classList.remove('active');
    drop.classList.remove("active");
    menu.classList.remove('active-menu')
    single.classList.add('active')
});

singleClose.addEventListener('click', function(){
   
    single.classList.remove('active')
})


const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

})

