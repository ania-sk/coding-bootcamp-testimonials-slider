const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');

prevBtns.forEach( prevBtn => {
    prevBtn.addEventListener('click', () => {
        changeActiveStatus();
    });
});

nextBtns.forEach( nextBtn => {
    nextBtn.addEventListener('click', () => {
        changeActiveStatus();
    });
});

function changeActiveStatus(){
    const activeSection = document.querySelector('.active');
    const unactiveSection = document.querySelector('.unactive');

    activeSection.classList.remove('active');
    unactiveSection.classList.add('active');

    activeSection.classList.add('unactive');
    unactiveSection.classList.remove('unactive');
}