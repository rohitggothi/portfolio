// Get all the navigation links

// JavaScript to show/hide the loading spinner
document.addEventListener('DOMContentLoaded', function () {
    // Show the loading spinner
    const loaderWrapper = document.querySelector('.loader-wrapper');
    loaderWrapper.style.display = 'flex'; // Show the loading spinner

    // Simulate loading delay (you can replace this with your actual loading logic)
    setTimeout(function () {
        // Hide the loading spinner
        loaderWrapper.style.display = 'none';
    }, 1000); // Simulated loading time: 1 seconds
});


// Add a click event listener to each navigation link
const navLinks = document.querySelectorAll('.nav__link');

// Add a click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove 'active' class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Get the target section's ID from the link's href attribute
        const targetId = link.getAttribute('href').substring(1);

        // Get the target section by its ID
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly, subtracting 100 pixels from the top position
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('.nav').offsetHeight + 90,
                behavior: 'smooth'
            });
        }
    });
});


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });


