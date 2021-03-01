$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 1,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    490: {
      items: 2,
    },
    576: {
      items: 2.5,
    },
    700: {
      items: 3.1,
    },
    800: {
      items: 1.8,
    },
    900: {
      items: 2.2,
    },
    1024: {
      items: 2.8,
    },
    1100: {
      items: 3,
    },
    1200: {
      items: 3.4,
    },
  },
});
