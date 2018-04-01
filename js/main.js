let searchPopup = document.querySelector('.search-popup');
let searchOpenBtn = document.querySelector('.search-bnt');
let searchCloseBtn = document.querySelector('.search-close');
let search = document.querySelector('.search-input');

let contactPopup = document.querySelector('.contact-popup-wrapper');
let contactOpenBtn = document.querySelector('.contact-open-btn');
let contactCloseBtn = document.querySelector('.contact-close');
let contactForm = document.querySelector('.contact-popup');
let contactName = document.querySelector('.input-name');

let openNavBtn = document.querySelector('.open-nav-btn');
let headerNav = document.querySelector('.nav-list');

let form = document.querySelector('.contact-form');

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
    contactPopup.classList.remove('error-form');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (contactPopup.classList.contains('open-popup')) {
            contactPopup.classList.remove('open-popup');
            contactPopup.classList.remove('error-form');
        }
    }
});

openNavBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    headerNav.classList.toggle('open-nav')
});

form.addEventListener('submit', function (evt) {
    let inputName = document.querySelector('.input-name');
    let inputPhone = document.querySelector('.input-phone');
    let inputEmail = document.querySelector('.input-email');
    let contactMassage = document.querySelector('.contact-massage');
    if (!(inputName.value && inputEmail.value && inputPhone.value && contactMassage.value)) {
        evt.preventDefault();
        contactPopup.classList.add('error-form');
        alert('Заполните поля формы');
    } else {
        if (!inputName.match('^[a-zA-Z]+$')){
            evt.preventDefault();
            contactPopup.classList.add('error-form');
            alert('В поле имя не должно быть цыфр');
        }
    }
});

$(function($){
    $('.input-phone').mask("+9(999) 999-99-99");
});

