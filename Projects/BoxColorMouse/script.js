let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
  let rectlocation = rect.getBoundingClientRect();
  let insideRectLeft = details.clientX - rectlocation.left;

  if (insideRectLeft < rectlocation.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      rectlocation.width / 2,
      255,
      0,
      insideRectLeft,
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
      rectlocation.width / 2,
      rectlocation.width,
      0,
      255,
      insideRectLeft,
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
