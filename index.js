const appearAnimatedElements = document.querySelectorAll(".appear-animation");
const skillsContainers = document.querySelectorAll(".my-skills-container");
const backEndSkills = document.querySelectorAll(".backend-skill-container");

const imgC = document.getElementById("cLanguagesImg");
const CLogos = ["C-Language.png","cplus.svg","csharp.svg"];

const backEndBackgroundColors = ["#DB380E","#6DB33F","#0072C7","#A179DC"];

backEndSkills.forEach((element, index) => {
    element.addEventListener('mouseover', () =>{
        element.style.background = backEndBackgroundColors[index];
        element.children[0].style.display= "none";
        element.children[2].style.display= "block";
        element.children[1].style.color= "white";
        element.children[2].classList.add('visible');
    });
    element.addEventListener('mouseleave', () =>{
        element.style.background = "white";
        element.children[0].style.display= "block";
        element.children[2].style.display= "none";
        element.children[1].style.color= "black";
        element.children[2].classList.remove('visible');
    });
});


//skillsContainers.forEach(e => { e.classList.add("visible")})

//document.addEventListener('focusin')
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar después de que sea visible
            }
        });
    }, observerOptions);

    const observerPermanent = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    const image = document.querySelector('#kotlinImg');
    const container = document.querySelector('#appDevContainer');

    container.addEventListener('mousemove', function(event) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left; // x posición del cursor relativa al contenedor
        
        const rotateY = ((x / rect.width) - 0.5) * 120; // Ajuste de ángulo según la posición del cursor
        image.style.transform = `rotateY(${rotateY}deg)`;
    });
    let currentIndex = 0;
    //Animacion C languages
    setInterval(() => {
        imgC.style.opacity = 0;
        setTimeout(( ) =>{
            currentIndex = (currentIndex+1) % CLogos.length;
            imgC.src = "images/logos/"+ CLogos[currentIndex];
            imgC.style.opacity = 1;
        },1000);
    
    },5000);

    skillsContainers.forEach(element => {observer.observe(element);});
    appearAnimatedElements.forEach(element => {observerPermanent.observe(element);});
    //container.addEventListener('mouseleave', function() {image.style.transform = 'rotateY(0) rotateX(0)';});
});