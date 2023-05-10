var slider = document.getElementById("amountRange");
var output = document.getElementById("amountTotalrange");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value ;
}

let aspectRatioGroup = document.querySelector('.form-amount-range .segmentedControl');
let radios = aspectRatioGroup.querySelectorAll('input');
let i = 1;

// set CSS Var to number of radios we have
aspectRatioGroup.style.setProperty('--options',radios.length);

// loop through radio elements
radios.forEach((input)=>{
	// store position as data attribute
	input.setAttribute('data-pos',i);
	
	// add click handler to change position
	input.addEventListener('click',(e)=>{
		aspectRatioGroup.style.setProperty('--options-active',e.target.getAttribute('data-pos'));
	});
	
	// increment counter
	i++;
});

// add class to enable the sliding pill animation, otherwise it uses a fallback
aspectRatioGroup.classList.add('useSlidingAnimation');


$('.testi-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: true,
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
});


const finputs = Array.from(
  document.querySelectorAll('.fileupload [type="file"]')
);

finputs.forEach((input) => {
  input.addEventListener("change", (e) => {
      const path = e.target.value;
      const filenameField = e.target.parentElement.querySelector("span");
      const filename = path.split(/\/|\\/).pop();
      if (filename) filenameField.innerText = filename;
      else filenameField.innerText = "Filename";
  });
});

$(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('nav .menu-nav a, .footer-link a').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
  