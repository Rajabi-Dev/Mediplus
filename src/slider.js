let slider = document.querySelector(".slider"),
    sliderTrack = document.querySelector(".slider__track"),
    sliderSlide = document.querySelectorAll(".slider__slide"),
    sliderNext = document.querySelector(".slider__next"),
    sliderPrev = document.querySelector(".slider__prev"),
    sliderContent = document.querySelector(".slider__content");
let index = 1;
let isMoving = false;
sliderSlide = Array.from(sliderSlide);
let firstClone = sliderSlide[0].cloneNode(true);
let lastClone = sliderSlide[sliderSlide.length - 1].cloneNode(true);
sliderTrack.append(firstClone);
sliderTrack.prepend(lastClone);
sliderSlide = document.querySelectorAll(".slider__slide");
sliderSlide = Array.from(sliderSlide);


function moveToIndex(index, selectorElement, withTransition = true) {
    if (!withTransition) {
        selectorElement.style.transition = "none";
    }
    else{
        selectorElement.style.transition = "";
    }

    selectorElement.style.transform = `translateX(-${index * 100}%)`;
}
export function moveSlider() {

    alert()
    moveToIndex(index, sliderTrack, false);
    requestAnimationFrame(() => {
        sliderTrack.style.transition = '';
        sliderContent.querySelector("h1").style.transition = '';
        sliderContent.querySelector("p").style.transition = '';
        sliderContent.querySelector(".slider__btns").style.transition = '';
    });
    sliderNext.addEventListener("click", () => {

        setTimeout(function (){
            sliderContent.querySelector("h1").classList.remove("moveTitle");
            sliderContent.querySelector("p").classList.remove("moveTitle");
            sliderContent.querySelector(".slider__btns").classList.remove("moveTitle");
        },200);
        if (!isMoving) {
            isMoving = true;
            index++;
            moveToIndex(index, sliderTrack)
        }
    })
    sliderPrev.addEventListener("click", () => {
        setTimeout(function (){
            sliderContent.querySelector("h1").classList.remove("moveTitle");
            sliderContent.querySelector("p").classList.remove("moveTitle");
            sliderContent.querySelector(".slider__btns").classList.remove("moveTitle");
        },200);
        if (!isMoving) {
            isMoving = true;
            index--;
            moveToIndex(index, sliderTrack)
        }
    })

    sliderTrack.addEventListener("transitionend", () => {
        if (sliderSlide[index] === firstClone) {
        sliderContent.querySelector("h1").classList.add("moveTitle");
        setTimeout(function (){
            sliderContent.querySelector("p").classList.add("moveTitle");
        },500)
        setTimeout(function (){
            sliderContent.querySelector(".slider__btns").classList.add("moveTitle");
        },1000)
            index = 1;
            sliderTrack.style.transition = "none";
            moveToIndex(index, sliderTrack, false);
        }
        if (sliderSlide[index] === lastClone) {
            sliderContent.querySelector("h1").classList.add("moveTitle");
            setTimeout(function (){
                sliderContent.querySelector("p").classList.add("moveTitle");
            },500)
            setTimeout(function (){
                sliderContent.querySelector(".slider__btns").classList.add("moveTitle");
            },1000);
            index = sliderSlide.length - 2;
            sliderTrack.style.transition = "none";
            moveToIndex(index, sliderTrack, false);
        }
        isMoving = false;
    })
}

export function showSliderContent(element,className){
    sliderTrack.addEventListener("transitionend", () => {
       sliderContent.querySelector("h1").classList.add(className);
       setTimeout(function (){
           sliderContent.querySelector("p").classList.add(className);
       },5000)
       setTimeout(function (){
       sliderContent.querySelector(".slider__btns").classList.add(className);
       },10000)
       })}
