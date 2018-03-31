let searchPopup = document.querySelector('.search-popup');
let searchOpenBtn = document.querySelector('.search-bnt');
let searchCloseBtn = document.querySelector('.search-close');
let search = document.querySelector('.search-input');

let contactPopup = document.querySelector('.contact-popup-wrapper');
let contactOpenBtn = document.querySelector('.contact-open-btn');
let contactCloseBtn = document.querySelector('.contact-close');
let contactForm = document.querySelector('.contact-popup');
let contactName = document.querySelector('.input-name');

searchOpenBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchPopup.classList.add('open-popup');
    search.focus();
});

searchCloseBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    searchPopup.classList.remove('open-popup');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (searchPopup.classList.contains('open-popup')) {
            searchPopup.classList.remove('open-popup')
        }
    }
});

contactOpenBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactPopup.classList.add('open-popup');
    contactName.focus();
});

contactCloseBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove('open-popup');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (contactPopup.classList.contains('open-popup')) {
            contactPopup.classList.remove('open-popup')
        }
    }
});