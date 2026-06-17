function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

const cursor = document.querySelector(".cursor")
const main = document.querySelector("#main")
main.addEventListener("mousemove",function(e){
   cursor.style.left = e.x+"px"
   cursor.style.top = e.y+"px"
})

const pVideo = document.querySelector("#page1-video");

pVideo.addEventListener("mouseenter", () => {
    cursor.classList.add("video-cursor");
    cursor.innerHTML = "SOUND ON";
});

pVideo.addEventListener("mouseleave", () => {
    cursor.classList.remove("video-cursor");
    cursor.innerHTML = "";
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  "#page1 h1",
  {
    x: -100,
  },
  "anim",
);
tl.to(
  "#page1 h2",
  {
    x: 100,
  },
  "anim",
);
tl.to(
  "#page1 video",
  {
    width: "90%",
  },
  "anim",
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -115%",
    end: "top -120%",
    scrub: 3,
  },
});
tl2.to("#main", {
  backgroundColor: "#fff",
});



let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    // markers:true,
    start: "top -480%",
    end: "top -500%",
    scrub: 3,
  }
});

tl3.to('#main',{
 backgroundColor: "#0F0D0D"
})