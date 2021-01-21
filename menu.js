//animation  fade
//Animate on scroll 
AOS.init({
    offset: 120,
    duration: 1000,
});
//navbar
function openNav(){
    
    document.getElementById('res-navbar').style.width = "250px";
}

function  closeNav(){
    document.getElementById('res-navbar').style.width = "0px";
}

window.onscroll = function (){
    stickyNavBar();
    menuAnimate()
};
var stickyNav= document.getElementById('sticky-nav');
var sticky= stickyNav.offsetTop;
 function stickyNavBar() {
    if (window.pageYOffset > sticky) {
        stickyNav.classList.add('sticky');
    } else{
        stickyNav.classList.remove('sticky');
    }
 }
//order-menu
function openOrder() {
    document.getElementById('order-menu').style.width="90%";
}
function closeOrder() {
    document.getElementById('order-menu').style.width="0%";
}
//order-menu end

//slides
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName('slider');
    for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000);
}


//show-hide menu
var fullMenu = document.getElementById('menu-box');
function menuAnimate() {
    if(document.body.scrollTop > 380 || document.documentElement.scrollTop > 380){
        fullMenu.style.transform="translateY(0px)";
        fullMenu.style.transition="0.6s all ease-in-out";
        fullMenu.style.opacity="1";
    }else{
        fullMenu.style.transform="translateY(300px)";
        fullMenu.style.transition="0.6s linear";
        fullMenu.style.opacity="0.20";
    }
} 

var breakfast = document.getElementById('breakfast');
var drinks = document.getElementById('drinks');
var launch = document.getElementById('launch-part-menu');
var launchItem = document.getElementById('lun-spe');
var special = document.getElementById('special');
var dinner = document.getElementById('dinner');

var seeallBtn = document.getElementById('menu-btns-1');
seeallBtn.addEventListener('click', seeAll);

function seeAll() {
   
    breakfast.style.display= "";
    drinks.style.display= "";
    launch.style.display= "";
    special.style.display= "";
    dinner.style.display= "";
    var appendMenu1=document.getElementById('append-menu1');
    var appendMenu2=document.getElementById('append-menu2');
    //var appendMenu3=document.getElementById('append-menu3');
    var seeall1=document.getElementById('menu-item1');
    var seeall2=document.getElementById('menu-item2');
    //var seeall3=document.getElementById('menu-item3');
    seeall1.style.display="none";
    seeall2.style.display="none";
    //seeall3.style.display="none";
    appendMenu1.appendChild(breakfast);
    appendMenu1.appendChild(drinks);
    appendMenu2.appendChild(launchItem);
    appendMenu2.appendChild(dinner);
    
}


var breakfastBtn = document.getElementById('menu-btns-2');

breakfastBtn.addEventListener('click', breakFast);

function breakFast() {
   
    breakfast.style.display= "";
    //breakfast.style.margin= "auto";
    drinks.style.display= "none";
    launch.style.display= "none";
    special.style.display= "none";
    dinner.style.display= "none";
}


var drinksBtn = document.getElementById('menu-btns-3');

drinksBtn.addEventListener('click', Drinks);

function Drinks() {
   
    breakfast.style.display= "none";
    drinks.style.display= "";
    //drinks.style.margin= "auto";
    launch.style.display= "none";
    special.style.display= "none";
    dinner.style.display= "none";
}


var launchBtn = document.getElementById('menu-btns-4');

launchBtn.addEventListener('click', Launch);

function Launch() {
    breakfast.style.display= "none";
    drinks.style.display= "none";
    launch.style.display= "";
    //launch.style.margin= "auto";
    special.style.display= "none";
    dinner.style.display= "none";
}


var specialBtn = document.getElementById('menu-btns-5');

specialBtn.addEventListener('click', Special);

function Special() {
    
    breakfast.style.display= "none";
    drinks.style.display= "none";
    launch.style.display= "none";
    special.style.display= "";
    //special.style.margin= "auto";
    dinner.style.display= "none";
}


var dinnerBtn = document.getElementById('menu-btns-6');

dinnerBtn.addEventListener('click', Dinner);

function Dinner() {
    
    breakfast.style.display= "none";
    drinks.style.display= "none";
    launch.style.display= "none";
    special.style.display= "none";
    dinner.style.display= "";
    //dinner.style.margin= "auto";
}














