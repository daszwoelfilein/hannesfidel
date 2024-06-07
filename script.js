// Function to initialize each slideshow
function initializeSlideshow(slideshow) {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll(".slide");
    const pagination = slideshow.querySelector(".pagination"); // Get the pagination element

    // Function to show a specific slide
    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[index].style.display = "block";

        // Update the pagination text
        pagination.textContent = `${index + 1}/${slides.length}`;
    }

    // Initial display
    showSlide(slideIndex);

    // Click on the left half of the image
    slides.forEach((slide, index) => {
        slide.addEventListener("click", (event) => {
            const clickX = event.clientX - slide.getBoundingClientRect().left;
            const halfWidth = slide.clientWidth / 2;

            if (clickX < halfWidth) {
                // Clicked on the left half, go to the previous slide
                slideIndex = (index - 1 + slides.length) % slides.length;
            } else {
                // Clicked on the right half, go to the next slide
                slideIndex = (index + 1) % slides.length;
            }

            showSlide(slideIndex);
        });

        // Hover effect for custom cursors
        slide.addEventListener("mousemove", (event) => {
            const hoverX = event.clientX - slide.getBoundingClientRect().left;
            const halfWidth = slide.clientWidth / 2;

            if (hoverX < halfWidth) {
                // Hovering over the left half, set left arrow cursor
                slide.classList.remove("right-half");
                slide.classList.add("left-half");
            } else {
                // Hovering over the right half, set right arrow cursor
                slide.classList.remove("left-half");
                slide.classList.add("right-half");
            }
        });

        // Reset cursor on mouseout
        slide.addEventListener("mouseout", () => {
            slide.classList.remove("left-half", "right-half");
        });
    });

    // Function to show the next slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    // Function to show the previous slide
    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    /*// Change slide every 5 seconds
    setInterval(nextSlide, 5000);*/
}

// Initialize each slideshow
const slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach((slideshow) => {
    initializeSlideshow(slideshow);
});