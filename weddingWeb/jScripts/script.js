var slideIndex = 1;

function loadFunc() {
showSlides(slideIndex);
}

function plusSlides(num) {
  showSlides(slideIndex += num);
}

function currentSlide(num) {
  showSlides(slideIndex = num);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var mini_img = document.getElementsByClassName("mini_img");
  
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  mini_img[i].className = mini_img[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  mini_img[slideIndex-1].className += " active";
  
  document.getElementById("caption").innerHTML = mini_img[slideIndex-1].alt;

}