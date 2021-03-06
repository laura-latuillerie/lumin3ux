/*********** Start of LOADING PAGE **********/

document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
      document.querySelector("body").style.visibility = "hidden"; 
      document.querySelector("#loader").style.visibility = "visible"; 
  } else { 
      document.querySelector("#loader").style.display = "none"; 
      document.querySelector("body").style.visibility = "visible"; 
  } 
}; 

/*********** End of LOADING PAGE **********/

/*********** Start of FIXED/SOLID NAVBAR **********/

$(document).ready(function() {
  // Transition effect for navbar 
  $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 100) { 
        $('.fixed-top').addClass('solid');
    } else {
        $('.fixed-top').removeClass('solid');
    }
  });
});

/*********** End of FIXED/SOLID NAVBAR **********/

/*********** Start of TEXT ROTATION **********/

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  /*********** End of TEXT ROTATION **********/

  /*********** Start of TOP BUTTON **********/

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*********** End of TOP BUTTON **********/

/*********** Start of RGPD **********/

const popupRgpd = document.getElementById('popup-rgpd');
const linkValid = document.getElementById('accept');

     linkValid.addEventListener('click',function(event){
       event.preventDefault();
       popupRgpd.classList.remove('open')
});

/*********** End of RGPD **********/ 


/*********** SMALL POP-UP **********/

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunction2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show");
}

function myFunction3() {
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show");
}

function myFunction4() {
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show");
}

function myFunction5() {
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show");
}

function myFunction6() {
  var popup6 = document.getElementById("myPopup6");
  popup6.classList.toggle("show");
}

function myFunction7() {
  var popup7 = document.getElementById("myPopup7");
  popup7.classList.toggle("show");
}

function myFunction8() {
  var popup8 = document.getElementById("myPopup8");
  popup8.classList.toggle("show");
}

function myFunction9() {
  var popup9 = document.getElementById("myPopup9");
  popup9.classList.toggle("show");
}

function myFunction10() {
  var popup10 = document.getElementById("myPopup10");
  popup10.classList.toggle("show");
}

function myFunction11() {
  var popup11 = document.getElementById("myPopup11");
  popup11.classList.toggle("show");
}

function myFunction12() {
  var popup12 = document.getElementById("myPopup12");
  popup12.classList.toggle("show");
}

/*********** End of SMALL POP-UP **********/ 