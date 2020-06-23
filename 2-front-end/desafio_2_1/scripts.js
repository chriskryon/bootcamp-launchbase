const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        const course = card.getAttribute('id');
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${course}`;
    });
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.querySelector("iframe").src = "http://google.com.br";
})

document.querySelector('.action-modal').addEventListener('click', () => {
    modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/`;
});