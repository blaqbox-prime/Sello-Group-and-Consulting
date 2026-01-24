// Make sure gore page is completely loaded.
document.addEventListener("DOMContentLoaded", () => {


    // list of slides here
    const slides = document.getElementsByClassName("slide");
    let currentSlide = 0;

    setInterval(() => {
        let prevSlide = currentSlide;

        if(currentSlide < slides.length - 1){
            currentSlide = currentSlide + 1;
        } else {
            prevSlide = 3
            currentSlide = 0;
        }

        console.log({prevSlide, currentSlide})
        slides[prevSlide].classList.toggle("active");
        slides[currentSlide].classList.toggle("active");


    }, 5000)


})