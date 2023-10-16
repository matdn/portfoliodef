gsap.registerPlugin(ScrollTrigger);

const scrollLine = document.querySelector('.scroll-line');

window.addEventListener('scroll', function(){
    const sectionHeight =  4285;
    const scrolled = (window.scrollY) - 4285;
    const fullHeight = document.body.clientHeight;
    const percentScrolled = (scrolled / (fullHeight - sectionHeight) * 100);
    scrollLine.style.width = percentScrolled + '%';
    scrollLine.style.width = `${percentScrolled}%` ;
});

gsap.to(".btn__flip1",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 0",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});
gsap.to(".btn__flip2",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 40",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});
gsap.to(".btn__flip3",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 80",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});
gsap.to(".btn__flip4",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 120",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});
gsap.to(".btn__flip5",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 160",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});
gsap.to(".btn__flip6",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 200",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});
gsap.to(".btn__flip7",{
  scrollTrigger: {
      trigger: ".Dtext",
      start: "top 240",
      end: '+=300',
      scrub:1
  },
  rotateX: -90
});


let sections = gsap.utils.toArray(".panel");

if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
  gsap.to(".threeD", {
    xPercent: -100,
    x: () => innerWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".threeD",
      start: "top top",
      end: () => innerWidth * 7,
      scrub: true,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      snap: 1 / (sections.length - 2),
    }
  });
}

function toggleImage(element) {
  var image = element.previousElementSibling; 
  var text = element.nextElementSibling;

  image.style.height = (text.style.display === 'block') ? '55vh' : '0';
    text.style.display = (text.style.display === 'block') ? 'none' : 'block';
    if (text.style.display === 'block') {
      element.textContent = 'Retour';
      document.getElementsByClassName("span1").classList.add("span1");
      console.log("test");
    } else {
      element.textContent = 'En savoir plus';
    }
}

function parallax(element) {
  if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
    const windowH = window.innerHeight;
    function inView(elements) {
        let elementPositionTop = elements.getBoundingClientRect().top - windowH;
        let elementPositionBottom = elements.getBoundingClientRect().bottom;
        if (elementPositionTop < 0 && elementPositionBottom > 0) {
            return true; 
        } else {
            return false;
        }
    }
  }
}

function disableHorizontalScrollOnTouch() {
  if ('ontouchstart' in window || navigator.maxTouchPoints) {
    const sections = document.querySelectorAll('.horizontal'); 
    sections.forEach(section => {
      section.style.overflowX = 'hidden';
    });
  }
}

disableHorizontalScrollOnTouch();

  


