gsap.registerPlugin(SplitText);

let split1, split2, animation;

window.addEventListener("load", async () => {
  setup();
  const buttonElement = document.querySelector(".btn");

  gsap.set(split2.lines, { opacity: 0, y: 50 });
  gsap.set(buttonElement, { opacity: 0, y: 50 });

  animation && animation.revert();

  animation = gsap
    .timeline()
    .from(split1.lines, {
      rotationX: -100,
      transformOrigin: "50% 50% -150px",
      opacity: 0,
      duration: 0.8,
      ease: "power3",
      stagger: 0.25,
    })
    .to(split2.lines, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power3",
    }) // start immediately after previous ends
    .to(
      buttonElement,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        opacity: 1,
        ease: "power3.out",
      },
      ">"
    ); // immediately after previous too
});

function setup() {
  split1 && split1.revert();
  split2 && split2.revert();
  animation && animation.revert();

  split1 = SplitText.create(".text", { type: "lines" });
  split2 = SplitText.create(".text2", { type: "lines" });
}

window.addEventListener("resize", setup);
