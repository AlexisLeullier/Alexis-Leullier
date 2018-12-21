let btn = document.querySelector('.toggle-btn');
let nav = document.querySelector('.nav');

btn.onclick = function(){
    nav.classList.toggle('nav_open');
}