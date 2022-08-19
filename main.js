const slidesWrapper = document.querySelector(".hero-carousel-wrapper");
const slideContainers = document.querySelector(".slide-container");
const prevButton = document.querySelector(".previous-slide");
const nextButton = document.querySelector(".next-slide");

nextButton.addEventListener("click", (event) => {
    const slideWidth = slideContainers.clientWidth;
    slidesWrapper.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", (event) => {
    const slideWidth = slideContainers.clientWidth;
    slidesWrapper.scrollLeft -= slideWidth;
});
