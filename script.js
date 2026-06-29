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
document.addEventListener("mousemove",function(e){
   cursor.style.left = e.x + 10 +"px"
   cursor.style.top = e.y+ 10 + "px"
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

const boxes = document.querySelectorAll(".box")
boxes.forEach(function(e){
  e.addEventListener("mouseenter",function(){
   const att =  e.getAttribute("data-image")
   cursor.style.width = "300px"
   cursor.style.height = "250px"
   cursor.style.borderRadius = "0"
   cursor.style.backgroundImage=`url(${att})`;
  })
   e.addEventListener("mouseleave",function(){
    e.style.backgroundColor="transparent"
     cursor.style.width = "20px"
   cursor.style.height = "20px"
   cursor.style.borderRadius = "50%"
   cursor.style.backgroundImage=`none`;
  })
})



function buildMarquee(label) {

  const repeat = label + " · ";
  const text = repeat.repeat(10); 

  return `
    <div class="marquee-track">
      <span>${text}</span>
      <span>${text}</span>
    </div>
  `;
}

const purple = document.querySelector("#purple");
const nav = document.querySelector("#nav");
const workdisplay = document.getElementById("work-display");


document.getElementById("work").addEventListener("mouseenter", () => {
  purple.style.display = "flex";
  purple.style.opacity = "1";
  workdisplay.innerHTML = buildMarquee("WORK");
});


document.getElementById("studio").addEventListener("mouseenter", () => {
  purple.style.display = "flex";
  purple.style.opacity = "1";
  workdisplay.innerHTML = buildMarquee("STUDIO");
});


document.getElementById("contact").addEventListener("mouseenter", () => {
  purple.style.display = "flex";
  purple.style.opacity = "1";
  workdisplay.innerHTML = buildMarquee("CONTACT");
});


nav.addEventListener("mouseleave", () => {
  purple.style.opacity = "0";
  
  setTimeout(() => {
    purple.style.display = "none";
    workdisplay.innerHTML = "";
  }, 300);
});