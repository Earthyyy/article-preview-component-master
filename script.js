const shareButton = document.querySelector('.icon-container');
const authorInfos = document.querySelector('.author__infos');
const socialsBox = document.querySelector('.socials__container');
const containerBox = document.querySelector('.article__author');


shareButton.addEventListener('click',() => {
    authorInfos.classList.toggle('hidden');
    socialsBox.classList.toggle('hidden');
    shareButton.classList.toggle('inverted');
    containerBox.classList.toggle('inverted');

})

