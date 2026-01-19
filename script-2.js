const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('#mainNav a');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('isOpen');
    mainNav.classList.toggle('isActive');
    
    if (mainNav.classList.contains('isActive')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});