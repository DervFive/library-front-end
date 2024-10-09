const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')
const carousel = document.querySelector('.carousel')
const list = document.querySelector('.list')
const landingPage = document.querySelector('.landing-page')
const runningTime = document.querySelector('.timeRunning')


let timeRunning = 3000
let timeAutoNext = 7000


nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

function showSlider(type) {
    if( type === 'next') {
        list.appendChild(landingPage[0])
        carousel.classList.add('next')
    }else {
        list.prepend(landingPage[landingPage.length - 1])
        carousel.classList.add('prev')
    }
}