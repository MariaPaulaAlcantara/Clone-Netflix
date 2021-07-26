// POPUP de elite
const button = document.querySelector('#btn-popup');
const popup = document.querySelector('.popup-wrapper');
const fechar = document.querySelector('.popup-close');

const sobrepor = document.querySelector('.owl-carousel');

button.addEventListener('click', () => {
    popup.style.display = 'block'
});

fechar.addEventListener('click', () => {
    popup.style.display = 'none'
});

button.addEventListener('click', () => {
    sobrepor.style.zIndex = -1;
});

fechar.addEventListener('click', () => {
    sobrepor.style.zIndex = 1;
})


// POPUP de rick and morty
const buttonD = document.querySelector('#btn-popupD');
const popupD = document.querySelector('.popup-wrapperD');
const fecharD = document.querySelector('.popup-closeD');

buttonD.addEventListener('click', () => {
    popupD.style.display = 'block'
});

fecharD.addEventListener('click', () => {
    popupD.style.display = 'none'
});


