
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    if(window.scrollY > 250){
        header.classList.add('actvie');
    }else{
        header.classList.remove('actvie');
    }
}
var swiper = new Swiper(".home-slider", {
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },

    autoplay: {
        delay: 2500,
        disableonInteraction: false,
    },
    loop:true,
});
function loader(){
    document.querySelector('.loader-container').classList.add('Addloader');
}

function Addloader(){
    setInterval(loader, 3000);
}

window.onload = Addloader();