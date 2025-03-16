// GSAP Slide-in Animation for Header Image
gsap.from("#header-img", { 
    duration: 1.5, 
    opacity: 0, 
    x: -100, 
    ease: "power2.out" 
});

// Zoom-in Effect for Service Cards on Hover
document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
});

// Button Hover Animation (Pulse Effect)
document.querySelectorAll(".animated-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
    });
});

// Continuous Slideshow Effect for Images
gsap.to(".slider-img", {
    x: "-100%", 
    duration: 5, 
    repeat: -1, 
    ease: "linear"
});

// Scroll-triggered fade-in animations
gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
        },
    });
});
