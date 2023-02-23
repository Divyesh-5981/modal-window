'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');

// for (let i = 0; i < btnsOpenModal.length; i++) {
//     console.log(btnsOpenModal[i].textContent)
// }

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnsCloseModal = document.querySelector('.close-modal');

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnsCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('hidden') && e.key === 'Escape') {
        closeModal();
    }
});
