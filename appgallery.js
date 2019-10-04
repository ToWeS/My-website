function scrollAppear() {
    var introText = document.querySelector('.gallery')
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {
        introText.classList.add('galler-appear');
    }
}

window.addEventListener('scroll', scrollAppear);