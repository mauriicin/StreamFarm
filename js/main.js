const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        });
    }
}
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    delay: 200,
    //reset: true
});
const sections = document.querySelectorAll('section[id]');
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-mobile');
    navMenu.classList.remove('show');
}
function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

window.addEventListener('scroll', scrollActive);
showMenu('nav-toggle','nav-mobile');
navLink.forEach(n => n.addEventListener('click', linkAction));
sr.reveal('.hero__data, .info__data ',{}); 
sr.reveal('.hero__img, .info__img ',{delay: 400}); 
