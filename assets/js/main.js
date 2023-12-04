
/* javascript */
let currentSlide = 0;
    let score = 0;

    function showSlide(slideIndex) {
        const slides = document.querySelectorAll('.page');
        slides.forEach(slide => slide.style.display = 'none');
        slides[slideIndex].style.display = 'block';
    }

    function startQuiz() {
        showSlide(1); // Show the first question slide
    }

    function nextQuestion() {
        // Increment the current slide index
        currentSlide++;

        // You can add logic here to check the answer and update the score

        // For simplicity, let's assume correct answer increments the score
        score++;

        // Show the next slide or results page if there are no more questions
        if (currentSlide < 3) { // Assuming you have 3 questions
            showSlide(currentSlide);
        } else {
            showResults();
        }
    }

    function showResults() {
        // Display the results page with the final score
        document.getElementById('score').innerText = score;
        showSlide(2);
    }

function toggleFontSize() {
    // Get the current font size
    var currentSize = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));

    // Toggle between two font sizes (you can customize the sizes as needed)
    var newSize = (currentSize === 16) ? 24 : 16;

    // Apply the new font size to the body
    document.body.style.fontSize = newSize + 'px';
  }

function toggleColors() {
    var buttonColor = document.getElementById("toggleButtonColor");

    // Check the current background color
    if (buttonColor.style.backgroundColor === "rgb(52, 152, 219)") {
        // If it's the initial color, change it to a different color
        buttonColor.style.backgroundColor = "#e74c3c";
        buttonColor.style.color = "#fff";
    } else {
        // If it's the second color, change it back to the initial color
        buttonColor.style.backgroundColor = "#3498db";
        buttonColor.style.color = "#fff";
    }
}

function toggleFontColors() {
    var buttonFontColors = document.getElementById("toggleButtonFontColor");

    // Check the current font color
    if (buttonFontColors.style.color === "rgb(255, 255, 255)") {
        // If it is initial color, change it to a different color
        buttonFontColors.style.backgroundColor = "#3498db";
        buttonFontColors.style.color = "#000";
    } else {
        // Else, if it is the second color, change it back to the initial color
        buttonFontColors.style.color = "#fff";
    }
}