const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeButton");
const cards = document.querySelectorAll(".card");
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('#mainNav a');

cards.forEach(card => {
    card.addEventListener("click", () => {
        const imageSource = card.querySelector("img").src;
        modalImg.src = imageSource;
        modal.classList.add("isVisible");
    });
});

closeBtn.onclick = () => {
    modal.classList.remove("isVisible");
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.classList.remove("isVisible");
    }
};

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('isOpen');
    mainNav.classList.toggle('isActive');
    
    if (mainNav.classList.contains('isActive')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});