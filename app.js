const arrows = document.querySelectorAll('.arrow');
const movieList = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    const widthRadio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    const imageItem = movieList[i].querySelectorAll('img').length;
    arrow.addEventListener('click', function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) + (4 - widthRadio) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get('transform')[0].x.value - 300}px)`

        } else {
            movieList[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
    })
})


// Dark Mode

const ball = document.querySelector('.toggle-ball')
const items = document.querySelectorAll('.container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select')

ball.addEventListener('click',function(){
    items.forEach((item)=> item.classList.toggle('active'))
})