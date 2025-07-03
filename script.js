// Toggle light/dark mode
const toggleButton = document.querySelector(".toggle-button");
const wrapper = document.querySelector(".toggle-wrapper");

wrapper.addEventListener('click', ()=>{
    toggleButton.checked = !toggleButton.checked;
    // document.body.classList.toggle('dark-mode');
    console.log(document.body.classList);
    if(toggleButton.checked){
        document.querySelector('.sun').style.opacity = '1';
        document.querySelector('.moon').style.opacity = '0';
        document.body.classList.add('dark-mode');
    }else{
        document.querySelector('.moon').style.opacity = '1';
        document.querySelector('.sun').style.opacity = '0';
        document.body.classList.remove('dark-mode');
    }
})

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

// Add the 'active' class to the nav link whose section is currently in view
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", ()=>{
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70 //Offset to account for header height
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            currentSection = section.getAttribute("id")
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === `#${currentSection}`){
            link.classList.add("active")
        }
    });
});