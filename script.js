// Selecciona el menú de navegación y el botón del menú
let mobileNav = document.querySelector('body');
let menuButton = document.getElementById('menubar');

// Agrega un evento de clic al botón del menú
menuButton.addEventListener('click', function (e) {
    mobileNav.classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-times');
});

// Selecciona todos los enlaces de navegación
let navLinks = document.querySelectorAll('nav ul li a');

// Agrega un evento de clic a los enlaces de navegación
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // Cierra el menú al hacer clic en un enlace
        mobileNav.classList.remove('mobile-nav-active');
        menuButton.classList.remove('fa-times');
    });
});

let typed = new Typed('.auto', {
    strings: ['Developer', 'Freelancer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
    const scrollPos = this.window.scrollY + 20;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});


// Selecciona todos los elementos con la clase 'clickable-item'
const clickableItems = document.querySelectorAll('.clickable-item');

// Agrega un evento de clic a cada elemento
clickableItems.forEach(item => {
  item.addEventListener('click', function () {
    // URL de la página a la que deseas redirigir
    const nuevaPagina = 'https://www.tupagina.com'; // Reemplaza con la URL que desees

    // Abre la nueva página en una nueva ventana del navegador
    window.open(nuevaPagina, '_blank');
  });
});




const skillsection = document.querySelector('.skillrow');
const progress = document.querySelectorAll('.skillinner');

function show(){

    progress.forEach(progresbar =>{
        const value = progresbar.dataset.count;

        progresbar.style.width = `${value}%`;
    })

}

function hide(){

    progress.forEach(p =>{
        

        p.style.width = 0;
    })

}



function checkVisibility() {
    const sectionPos = skillsection.getBoundingClientRect();
    const screenpos = window.innerHeight;
  
    if (sectionPos.top < screenpos && sectionPos.bottom > 0) {
      show();
    } else {
      hide();
    }
  }
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  
  // Llama a checkVisibility al cargar la página para manejar el estado inicial
  checkVisibility();
