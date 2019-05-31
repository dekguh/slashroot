/* COUNTDOWN */
var countDownDate = new Date("Sep 21, 2019 10:00:00").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

/* sponsor carousel */
$('#sponsorCarousel').owlCarousel({
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

/* sponsor carousel */
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