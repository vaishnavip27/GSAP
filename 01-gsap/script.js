// gsap.to("#box1", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });

// gsap.to("#box2", {
//   x: 1500,
//   backgroundColor: "yellow",
//   duration: 1.5,
//   delay: 2.5,
// });

// gsap.to("#box3", {
//   x: 1500,
//   scale: 0.5,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
// });

var tl = gsap.timeline();

tl.to("#box1", {
  x: 1200,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

tl.to("#box2", {
  x: 1200,
  duration: 1.5,
});

tl.to("#box3", {
  x: 1200,
  duration: 1.5,
  borderRadius: "50%",
});
