//navbar
function openNav() {

    document.getElementById('res-navbar').style.width = "250px";
}

function closeNav() {
    document.getElementById('res-navbar').style.width = "0px";
}

window.onscroll = function () {
    stickyNavBar();
    scrollFunction()
};
var stickyNav = document.getElementById('sticky-nav');
var sticky = stickyNav.offsetTop;

function stickyNavBar() {
    if (window.pageYOffset > sticky) {
        stickyNav.classList.add('sticky');
    } else {
        stickyNav.classList.remove('sticky');
    }
}
//contact-btn replace start
var contactBtn = document.getElementById("contact-us-btn");
var arrowRight = document.getElementById('arrow-right');
arrowRight.style.display = "none";

var rightBtn = document.getElementById('che-right');
rightBtn.style.color = "black";

contactBtn.addEventListener('mouseover', arrowChange1);
contactBtn.addEventListener('mouseout', arrowChange2);

function arrowChange1() {

    rightBtn.style.display = "none";
    arrowRight.style.display = "inline-block";
    arrowRight.style.transition = "0.2s linear";
    arrowRight.style.color = "orange";
    rightBtn.replceChild(rightBtn, arrowRight);
}

function arrowChange2() {
    rightBtn.style.display = "inline-block";
    arrowRight.style.display = "none";
    rightBtn.style.transition = "0.2s linear";
    rightBtn.style.color = "black";
    arrowRight.replceChild(arrowRight, rightBtn);
}

//contact-btn replace end

//accordion dropdown 

var conInfobtn = document.getElementsByClassName('show-hide-btn');
var downBtn = document.getElementById('che-down');
var upBtn = document.getElementById('che-up');
upBtn.style.display = "none";
var i;
for (var a = 0; a < conInfobtn.length; a++) {
    conInfobtn[a].addEventListener('click', function () {

        var panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
            panel.style.display = "none";

            downBtn.style.display = "block";
            upBtn.style.display = "none";
            upBtn.replaceChild(downBtn);
        } else {
            panel.style.display = "flex";
            downBtn.style.display = "none";
            upBtn.style.display = "block";
            downBtn.replaceChild(upBtn);
        }
    })

}

//Table booking btn
var mybutton = document.getElementById("sticky-order-btn");

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
//Animate on scroll 
AOS.init({
    offset: 120,
    duration: 2000,
});