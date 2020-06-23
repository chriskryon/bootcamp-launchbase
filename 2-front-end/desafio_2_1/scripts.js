const modalOverlay = document.querySelector('.modal-overlay');
const modal = modalOverlay.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active');
        const course = card.getAttribute('id');
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${course}`;
    });
}

document.querySelector('.action-modal').addEventListener('click', function() {
    if (modal.classList.contains('action')) {
        console.log('hahahaha');
        modal.classList.remove('action');
    } else {
        console.log('hahahaha');
        modal.classList.add('action');
    }
});

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
});