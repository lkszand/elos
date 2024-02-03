const slides = document.querySelectorAll(".slide");
let maxSlides = slides.length;

let slideEl = document.getElementsByClassName("slide");

window.onload = function(){
  slideEl[0].classList.add("active");
}

// var slidecount = -1
var slidecount = 0;

function counter() {
  var current = slidecount;
  var next = slidecount + 1;
  
  if(next == maxSlides)
    next = 0;
  
  slideEl[next].classList.add("active");
  slideEl[current].classList.remove("active");

  if(next == 0)
    slidecount = -1;

  slidecount++;
}

setInterval(() => {
  counter()
}, 2000);

logicalMenu = true;

function openMenu(){
  if (logicalMenu){
      document.getElementsByClassName("hdr-links-smart")[0].style = "display: none"
      logicalMenu = false;
      console.log("BOLOLO")
  } else{
    document.getElementsByClassName("hdr-links-smart")[0].style = "display: flex"
    logicalMenu = true;
    console.log("HAHA")

  }
  
}