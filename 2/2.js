'use strict';

const openBtn = document.querySelector('.button');
const closeBtn = document.querySelector('.modal .button');
const modal = document.querySelector('.modal');

const toggleModal = () => {
    modal.classList.toggle('modal--opened');
};

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);