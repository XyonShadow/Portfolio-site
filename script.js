var typed = new Typed(".text", {
    strings: ["Frontend Developer" , "Web Designer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

window.onscroll = () => document.querySelector(".header").classList.toggle("scrolled", window.scrollY>50)