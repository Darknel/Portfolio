var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  contain: true,
  wrapAround: true,
  autoPlay: 3000,
  selectedAttraction: 0.01,
  friction: 0.15,
  accessibility: true,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 15,
    x3: 45,
  },
  /* adaptiveHeight: true, */
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});
