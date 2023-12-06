// let currentSlide = 0;
// let score = 0;

// function showSlide(slideIndex) {
//     const slides = document.querySelectorAll('.page');
//     slides.forEach(slide => slide.style.display = 'none');
//     slides[slideIndex].style.display = 'block';
// }

// function startQuiz() {
//     showSlide(1); // Show the first question slide
// }

// function nextQuestion() {
//     // Increment the current slide index
//     currentSlide++;

//     // You can add logic here to check the answer and update the score

//     // For simplicity, let's assume correct answer increments the score
//     score++;

//     // Show the next slide or results page if there are no more questions
//     if (currentSlide < totalQuestions) {
//         showSlide(currentSlide);
//     } else {
//         showResults();
//     }
// }

// function showResults() {
//     // Display the results page with the final score and correct options
//     const percentage = (score / totalQuestions) * 100;
//     document.getElementById('result-percentage').innerText = `You scored ${percentage.toFixed(2)}%`;

//     const correctOptionsList = document.getElementById('correct-options-list');
//     correctOptionsList.innerHTML = ""; // Clear previous content

//     // Example: Display correct options for each question
//     const correctOptions = ["The Clone Wars", "Attack of the Clones", "Revenge of the Sith"];
//     for (let i = 0; i < totalQuestions; i++) {
//         const listItem = document.createElement('li');
//         listItem.innerText = `Question ${i + 1}: ${correctOptions[i]}`;
//         correctOptionsList.appendChild(listItem);
//     }

//     showSlide(2);
// }

// // Example function to get correct options (replace it with your logic)
// function getCorrectOption(questionNumber) {
//     // Replace this with your logic to get correct options based on question number
//     const correctOptions = ["The Clone Wars", "Attack of the Clones", "Revenge of the Sith"];
//     return correctOptions[questionNumber - 1]; // Adjust the index
// }

// function toggleFontSize() {
//     // Get the current font size
//     var currentSize = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));

//     // Toggle between two font sizes (you can customize the sizes as needed)
//     var newSize = (currentSize === 16) ? 24 : 16;

//     // Apply the new font size to the body
//     document.body.style.fontSize = newSize + 'px';
// }

// function toggleColors() {
//     var buttons = document.querySelectorAll(".button");
    
//     buttons.forEach(button => {
//         var buttonColor = button.style.backgroundColor;

//         // Check the current background color
//         if (buttonColor === "rgb(52, 152, 219)") {
//             // If it's the initial color, change it to a different color
//             button.style.backgroundColor = "#e74c3c";
//             button.style.color = "#fff";
//         } else {
//             // If it's the second color, change it back to the initial color
//             button.style.backgroundColor = "#3498db";
//             button.style.color = "#fff";
//         }
//     });
// }

// function toggleFontColors() {
//     var textColor = document.body.style.color;

//     // Check the current font color
//     if (textColor === "rgb(255, 255, 255)") {
//         // If it is the initial color, change it to a different color
//         document.body.style.backgroundColor = "#3498db";
//         document.body.style.color = "#000";
//     } else {
//         // Else, if it is the second color, change it back to the initial color
//         document.body.style.color = "#fff";
//     }
// }

// Add this JavaScript to your main.js file

let fontSizeIncreased = false;
let buttonColorsToggled = false;
let fontColorsToggled = false;

function toggleFontSize() {
    const body = document.getElementById('app');
    fontSizeIncreased = !fontSizeIncreased;
    body.style.fontSize = fontSizeIncreased ? '18px' : '16px';
}

function toggleColors() {
    const buttons = document.querySelectorAll('.button');
    buttonColorsToggled = !buttonColorsToggled;

    buttons.forEach(button => {
        button.style.backgroundColor = buttonColorsToggled ? '#28a745' : '#007bff';
    });
}

function toggleFontColors() {
    const buttons = document.querySelectorAll('.button');
    fontColorsToggled = !fontColorsToggled;

    buttons.forEach(button => {
        button.style.color = fontColorsToggled ? '#000' : '#fff';
    });
}

function startQuiz() {
    const startPage = document.getElementById('start-page');
    const quizPage = document.getElementById('quiz-page');
    startPage.style.display = 'none';
    quizPage.style.display = 'block';
}

function nextQuestion() {
    // Add your logic for processing quiz answers and moving to the next question here
    // For now, let's just show the results page
    const quizPage = document.getElementById('quiz-page');
    const resultsPage = document.getElementById('results-page');
    quizPage.style.display = 'none';
    resultsPage.style.display = 'block';

    // You can calculate and display the quiz results here
}

// Add this function to your main.js file
function restartQuiz() {
    const startPage = document.getElementById('start-page');
    const resultsPage = document.getElementById('results-page');
    
    // Reset any quiz-related data or states here
    
    resultsPage.style.display = 'none';
    startPage.style.display = 'block';
}

// Add this JavaScript to your main.js file
let isDarkTheme = false;

function toggleTheme() {
    const body = document.getElementById('app');
    const pages = document.getElementsByClassName('page');
    const questionCards = document.getElementsByClassName('card');

    // Toggle between light and dark theme for body
    isDarkTheme = !isDarkTheme;
    body.className = isDarkTheme ? 'dark-theme' : 'light-theme';

    // Toggle between light and dark theme for elements with "page" class
    for (let i = 0; i < pages.length; i++) {
        pages[i].className = isDarkTheme ? 'page dark-theme' : 'page light-theme';
    }

    // Toggle between light and dark theme for each question card
    for (let i = 0; i < questionCards.length; i++) {
        questionCards[i].className = isDarkTheme ? 'card mb-3 background dark-theme' : 'card mb-3 background light-theme';
    }
}

// You can add more functions for other toggles, like font size, color, etc.


// You can add more functions for other toggles, like font size, color, etc.


// You can add more functions for other toggles, like font size, color, etc.

