/* COUNTDOWN */
var countDownDate = new Date("Sep 17, 2019 23:59:59").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = '00';
  document.getElementById("hours").innerHTML = '00';
  document.getElementById("minutes").innerHTML = '00';
  document.getElementById("seconds").innerHTML = '00';
}, 1000);

/* sponsor carousel */
$('#sponsorCarousel').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: true,
  responsiveClass: true,
  margin: 20,
  responsive: {
    576: {
      items: 1
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});

/* media carousel */
$('#mediaCarousel').owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: true,
  responsiveClass: true,
  margin: 5,
  responsive: {
    576: {
      items: 1
    },
    768: {
      items: 3
    },
    992: {
      items: 5
    }
  }
});

/* smooth scroll */
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
