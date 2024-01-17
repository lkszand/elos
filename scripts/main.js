/*1. Main page things goes bellow*/

//1.1. Slide feature
const slides = document.querySelectorAll(".slide");
let maxSlides = slides.length;
let counter = 1 //It's a very dangerous variable 'cause it's not being passed as a parameter to other functions therefore the functions are changing it normally anyway. Only god knows what kind of properties and risks I will find if I have to proceed using this variable.
let slideEl = document.getElementsByClassName("slide");

window.onload = function(){
  slideEl[0].classList.add("active");
}

//1.1.1. Slide counter mechanism
nextSlide = function(maxSlides){
  if(counter == maxSlides){
    counter = 1;
  }
  else{
    counter +=1;
  }
}

prevSlide = function(){
  if(counter == 1){
    counter = maxSlides;
  }
  else{
    counter-=1;
  }
}

//1.1.2. Important feature that makes it show only one slide at a time
showSlide = function(){
    for (let i = 0; i < maxSlides; i++) {
      slideEl[i].classList.remove("active");
    }
    slideEl[counter-1].classList.add("active");
    console.log(counter);
}

//1.1.3. Setting buttons to trigger functions
nextBtn = document.querySelector(".next-btn");
prevBtn = document.querySelector(".prev-btn");

nextBtn.addEventListener("click", function(){
  nextSlide(maxSlides);
  showSlide();
});

prevBtn.addEventListener("click", function(){
  prevSlide();
  showSlide();
});

//1.1.4. Making the slider advance automatically
setInterval(() => {
  nextSlide(maxSlides);
  showSlide();
  console.clear()
}, 5000);
