'use strict';

(function () {
    let loadButton = document.querySelector('.button-load');
    let gallery = document.querySelector('.gallery');
    let IMAGES=['./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg'];
    loadButton.addEventListener('click', function(){
        loadButton.classList.add('hidden');
        IMAGES.forEach(function (el){
let galleryImg = document.createElement('img');
galleryImg.src = el;
galleryImg.classList.add('col-lg-3','img-item');
gallery.appendChild(galleryImg);
        })
    })
})();