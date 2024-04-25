import gsap from "gsap";

const animation = () => {
  const transition = document.getElementById("transition");

  if (transition) {
    const tl = gsap.timeline();

    tl.set(transition, {
      yPercent: 0,
    })
      .to(transition, {
        yPercent: -100,
        duration: 1.5,
        delay: 1.5,
        ease: "power3.inOut",
      })
      .to(transition, {
        // borderBottomLeftRadius: "10vh",
        // borderBottomRightRadius: "10vh",
        duration: 0.4,
      });
  }
};
export default animation;
