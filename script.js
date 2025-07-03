// Typing animation
var typed = new Typed(".text", {
    strings: ["Frontend Developer" , "Web Designer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

// Change header background on scroll
window.onscroll = () => document.querySelector(".header").classList.toggle("scrolled", window.scrollY>50)

// Implement custom scroll-triggered animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const element = entry.target;
        const name = element.dataset.animate;
        const delay = element.dataset.delay || '0s';
        const duration = element.dataset.duration || '1s';
        const easing = element.dataset.ease || 'ease';
        const fillMode = element.dataset.fillMode || 'forwards';

        if(entry.isIntersecting){
        element.style.animationName = name;
        element.style.animationDelay = delay;
        element.style.animationDuration = duration;
        element.style.animationTimingFunction = easing;
        element.style.animationFillMode = fillMode;
        }else{
            element.style.animationName = 'none';
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));