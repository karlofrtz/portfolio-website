const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('#mainNav a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('isOpen');
    mainNav.classList.toggle('isActive');
    
    document.documentElement.classList.toggle('no-scroll');
    document.body.classList.toggle('no-scroll');

    if (mainNav.classList.contains('isActive')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});