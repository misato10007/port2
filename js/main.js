let burgerMenu = document.querySelector('.burger_menu');

let overlay = document.querySelector('.mobile_menu');

let body = document.querySelector('body');

burgerMenu.addEventListener('click',function(){
    body.classList.toggle("overflow");
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});