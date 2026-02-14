
function breakText(){

    var h1 = document.querySelector("h1");
    var h1Text = document.querySelector("h1").textContent;
    var splited = h1Text.split("")

    var halfvalue = splited.length/2
    
    var clutter=""
    
    splited.forEach( function(elem,idx){
        if(idx<halfvalue){
            clutter += `<span class="a">${elem}</span>`  
        } else {
             clutter += `<span class="b">${elem}</span>`  
        }       
    })
    h1.innerHTML = clutter;
}
breakText()

gsap.from("h1 .a", {
   
    color: "random([#ffb6c1, #add8e6, #98fb98, #dda0dd, #f0e68c])",
    y:-50,
    rotate:10,
    duration:0.5,
    delay:1,
    opacity:0,
      // ease: "elastic.out(1, 0.3)",
    ease: "bounce.out",
    stagger: {
    each: 0.12,
    yoyo: true,
     ease: "power2.out"
    // ease: "back.out(1.7)"
  }
})

gsap.from("h1 .b", {
    color: "random([#ffb6c1, #add8e6, #98fb98, #dda0dd, #f0e68c])",
    y:-50,
      rotate:10,
    duration:0.5,
   delay:4.4,
    opacity:0,
      ease: "bounce.out",
        stagger: {
    each: 0.12,
    yoyo: true,
         ease: "power2.out"
  }
})

gsap.from(".images",{
  opacity:-2,
  duration:2,
  delay:8
})

    const sprinkle = document.querySelectorAll(".sprinkle");

  sprinkle.forEach((s, i) => {
    gsap.to(s, {
      y: window.innerHeight + 50,
      x: Math.random() * window.innerWidth,
      duration: 2 + Math.random() * 3,
      ease: "linear",
      repeat: -1,
      delay: i * 0.2
    });
  });
    const ysprinkle = document.querySelectorAll(".sprinkley");
  ysprinkle.forEach((s, i) => {
    gsap.to(s, {
      y: window.innerHeight + 50,
      x: Math.random() * window.innerWidth,
      duration: 2 + Math.random() * 3,
      ease: "linear",
      repeat: -1,
      delay: i * 0.2
    });
  });

   window.onload = () => {
      // Big burst like the 🎉 emoji
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
      });

      // Sprinkle for a few seconds
      const duration = 7 * 1000; // 3 seconds
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    };


gsap.from(".flower-para",{
    opacity:0,
      duration:2,
      delay:9.5,
})

    gsap.from(".dogimg",{
      opacity:0,
      duration:4,
      delay:10,
    })

       gsap.from(".tarif-section",{
      opacity:0,
      duration:4,
      delay:15,
    })
       gsap.from(".throwing-flower",{
      opacity:0,
      delay:16,
    })
       gsap.from(".photo",{
      opacity:0,
      delay:17,
    })
       gsap.from(".Glimpse",{
      opacity:0,
      delay:10,
    })
const track = document.querySelector(".image-track");
gsap.registerPlugin(ScrollTrigger);

// calculate width AFTER DOM is ready
const trackWidth = track.scrollWidth;

function loop() {
  gsap.to(track, {
    x: -trackWidth,
    duration: 15,
    delay: 0.01,
    ease: "linear",
    onComplete: () => {
      gsap.set(track, { x: 0 }); // reset back to start
      loop(); // repeat
    }
  });
}

// ScrollTrigger controls when loop runs
ScrollTrigger.create({
  trigger: "track",       // parent container
  start: "top 60%",         // when .images enters viewport
  end: "bottom 10%",        // when .images leaves viewport
  onEnter: () => loop(),    // start animation
  onLeaveBack: () => {
    gsap.killTweensOf(track);   // stop animation
    gsap.set(track, { x: 0 });  // reset position
  }
});


const envelope = document.querySelector(".envelope");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");


window.addEventListener("scroll", () => {
  const rect = envelope.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight - 150) {
    envelope.classList.add("visible");
    openBtn.classList.add("visible");
    closeBtn.classList.add("visible");
  }
});

  gsap.registerPlugin(ScrollTrigger);
  // Open animation
  function openAnimation() {
    const tl = gsap.timeline();
    tl.to(".flap", {
      duration: 0.2,

          ease: "elastic.out(1, 0.3)",
      opacity: 0
    });
    tl.from(".letter", {
      duration: 1,
      y: "0%",
      opacity: 0
    });
    tl.to(".letter", {
      duration: 1,
      y: "-38%",
      opacity: 1,
      ease: "power2.out"
    }, "-=0.5");
  }

  // Close animation
  function closeAnimation() {
    const tl = gsap.timeline();
    tl.to(".letter", {
      duration: 1,
      y: "0%",
      opacity: 0,
      ease: "power2.inOut"
    });
    tl.to(".flap", {
      duration: 1,
      rotateX: 0,
      opacity: 1,
      ease: "power2.inOut"
    }, "-=0.5");
  }

  // ScrollTrigger setup
  // ScrollTrigger.create({
  //   trigger: ".section",     
  //   start: "top 60%",         
  //   end: "bottom 20%",       
  //   markers: true,            

  // });

  // You can still keep your button triggers if you want:
  openBtn.addEventListener("click", openAnimation);
  closeBtn.addEventListener("click", closeAnimation);

const showBtn = document.querySelector("#showBtn");
const hideBtn = document.getElementById("hideBtn");
const happyanna = document.querySelector(".happyanna");

showBtn.addEventListener("click", () => {
  gsap.set(happyanna, { display: "block", opacity: 0, y: 50 });
  gsap.to(happyanna, {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out"
  });
});










