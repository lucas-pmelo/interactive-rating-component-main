const radio = document.querySelectorAll('.radio');
const button = document.querySelector('.button');
const rating = document.querySelector('#rating');
const thanks = document.querySelector('#thanks');
const texto = document.querySelector('.selected-number')

let numero = -1;

const selecionado = radio.forEach(element => {
    element.addEventListener('click', function () {
        for (let i = 0; i < radio.length; i++) {
            radio[i].classList.remove('selecionado');
        }
        element.classList.add('selecionado');
        numero = element.textContent;
    });
});

const enviar = button.addEventListener('click', function (e) {
    if (numero > -1) {
        rating.setAttribute('hidden', true);
        thanks.removeAttribute('hidden', false);
        texto.textContent = `you selected ${numero} out of 5`;
    }
    e.preventDefault();
});