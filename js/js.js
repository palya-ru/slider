const prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    wrapSlider = document.querySelector('.wrap'),
    slides = document.querySelectorAll('.item'),
    containerSlider = document.querySelector('.container-slider');
const slidesCount = slides.length;
const translateX = containerSlider.getBoundingClientRect().width;
//const translateX = 150;
let slidesIndex = 0;
let slidesToShow = 3;
let windowsWidth = 450;
const ok = false;
wrapSlider.style.width = `${translateX * slidesToShow}px`;
containerSlider.style.width = `${translateX * slidesCount}px`;

if(document.documentElement.clientWidth <= windowsWidth){
    slidesToShow = 1;
    wrapSlider.style.width = `${translateX * slidesToShow}px`;
}
window.addEventListener('resize', () =>{
    if(document.documentElement.clientWidth >= windowsWidth){
        slidesToShow = 3;
        wrapSlider.style.width = `${translateX * slidesToShow}px`;
        console.log(document.documentElement.clientWidth)
    }else if (document.documentElement.clientWidth <= windowsWidth){
        slidesToShow = 1;
        wrapSlider.style.width = `${translateX * slidesToShow}px`;
    }
}, true)

const slide = function(index, speed = 500){
    containerSlider.style.transform = `translate3d(-${translateX*(index)}px,0,0)`;
    containerSlider.style.transition = `transform ${speed}ms`;
    if (ok){
        next.classList.toggle('disabled',index >= slidesCount - 1);
        prev.classList.toggle('disabled', index === 0);
    }
}

document.addEventListener('click', (evt)=>{
    let target = evt.target;
    if(target && target.closest('.next')){
        if(slidesIndex >= slidesCount - (1 + (slidesToShow - 1))){
            if (!ok){
                slidesIndex = 0;
            }
        } else {
            slidesIndex ++;
        }
    }
    if (target && target.closest('.prev')){
        if (slidesIndex === 0){
            if(!ok){
                slidesIndex = slidesCount - (1 + (slidesToShow - 1));
            }
        }else {
            slidesIndex --;
        }
    }
    slide(slidesIndex);
})
