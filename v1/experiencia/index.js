function expand(i, btn) {
    var textID = `#exp${i}`;
    var $text = $(textID);

    if ($text.is(":visible")) {
        $text.hide();
        btn.innerHTML = "Ler mais";
    } else {
        $text.show();
        btn.innerHTML = "Ler menos";
    }
}

var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
// showSlides(1, 1);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  console.log(x[slideIndex[no]-1]);
  x[slideIndex[no]-1].style.display = "block";
}
