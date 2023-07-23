let openButton = document.querySelector('.profile__info__button');
let closeButton = document.querySelector('.close-profile__info');
let form = document.querySelector('.form');
let saveProfile = document.querySelector('.form__submit-button')

openButton.onclick = function () {
    console.log('Кнопка нажата!');
    form.classList.add('visible');
    closeButton.classList.add('visible');
};
closeButton.onclick = function () {
    console.log('Кнопка нажата!');
    form.classList.remove('visible');
    closeButton.classList.remove('visible');
};
saveProfile.onclick = function () {
    console.log('Кнопка нажата!');
    form.classList.remove('visible');
    closeButton.classList.remove('visible');
}