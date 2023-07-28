let likeButton = document.querySelector ('.elements__like');
console.log (likeButton.length);


likeButton.onclick = function () {
    console.log('Кнопка нажата');
    likeButton.classList.toggle('black');
}
