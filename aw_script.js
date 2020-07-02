var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}



// Reveal Portfolio Content
function revealPortfolio() {
  var x = document.getElementById("portfolio_content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



// Reveal Role
function revealRole() {
  var r = document.getElementById("role_list")
  var x = document.getElementById("org_list");

  if (r.style.display === "none") {
    r.style.display = "block";
    x.style.display = "none";
  } else {
    r.style.display = "none";
  }
}


// Reveal Org
function revealOrg() {
  var x = document.getElementById("org_list");
  var r = document.getElementById("role_list");
  if ((x.style.display == "none") && (r.style.display === "none")) {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}

function revealBoth() {
    var r = document.getElementById("role_list");
    var x = document.getElementById("org_list");
    if ((x.style.display == "none") && (r.style.display === "none")) {
        x.style.display = "block";
        x.style.padding = "0px 0px 0px 15s0px";
        r.style.display = "block";
    } else {
        x.style.display = "none";
        r.style.display = "none";
    }

}

