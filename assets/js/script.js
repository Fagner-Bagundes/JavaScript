const slider = document.querySelectorAll('.desafio-f');
const btnVoltar = document.querySelector('.btn-voltar');
const btnAvancar = document.querySelector('.btn-avancar');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
};

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function avancarSlide(){
    hideSlider()
    if (currentSlide === slider.length -1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function voltarSlide(){
    hideSlider()
    if (currentSlide === 0) {
        currentSlide = slider.length -1
    } else {
        currentSlide--
    }
    showSlider()
}

btnAvancar.addEventListener(`click`, avancarSlide)

btnVoltar.addEventListener(`click`, voltarSlide)

console.log(slider);



