let likeButton = document.querySelector ('.elements__group');

likeButton.onclick = function () {
    console.log('Кнопка нажата');
    likeButton.classList.toggle('black');
}
