const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("closeButton");
const cards = document.querySelectorAll(".card");

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