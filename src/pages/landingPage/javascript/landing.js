var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    landingPage = document.querySelector('.landing-page'),
    runningTime = document.querySelector('.timeRunning')


let timeRunning = 3000
let timeAutoNext = 7000


nextBtn.onclick = function () {
    showSlider('next')
}

prevBtn.onclick = function () {
    showSlider('prev')
}

function showSlider(type) {
    if (type === 'next') {
        list.appendChild(landingPage[0])
        carousel.classList.add('next')
    } else {
        list.prepend(landingPage[landingPage.length - 1])
        carousel.classList.add('prev')
    }
}