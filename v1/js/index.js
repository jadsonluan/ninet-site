// Get the container element
var btnContainer = document.getElementById("menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("menu-item");

// Loop through the buttons and add the item-active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("item-active");
    current[0].className = current[0].className.replace(" item-active", "");
    this.className += " item-active";
  });
}

// When the user scrolls the page, execute lockMenu
window.onscroll = function() {lockMenu()};

// Get the navbar
var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var placeholder = document.getElementById("navbar-placeholder");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function lockMenu() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    logo.style.display = "none";
    placeholder.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    logo.style.display = "block";
    placeholder.style.display = "none";
  }
}

var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 5 seconds
}
