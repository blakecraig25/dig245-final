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

    // Toggle between light and dark theme for body
    isDarkTheme = !isDarkTheme;
    body.className = isDarkTheme ? 'dark-theme' : 'light-theme';

    // Toggle between light and dark theme for elements with "page" class
    for (let i = 0; i < pages.length; i++) {
        pages[i].className = isDarkTheme ? 'page dark-theme' : 'page light-theme';
    }
}


// Assume you have an array to store user-selected answers
let userAnswers = [];
const correctAnswers = ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker", "Rogue One: A Star Wars Story", "Solo: A Star Wars Story", "The Clone Wars", "Star Wars Rebels", "The Mandalorian", "The Bad Batch", "Andor", "Kenobi"];
let wrongAnswer = [];
let wronguniqueArray = new Set();
// Function to update user-selected answers
function updateUserAnswers(questionNumber, selectedAnswer) {
    console.log(userAnswers);

    if(selectedAnswer !== correctAnswers[questionNumber-1]){
        wronguniqueArray.add(correctAnswers[questionNumber - 1]);
        console.log(wronguniqueArray);
    }
    if(selectedAnswer === correctAnswers[questionNumber - 1] && wronguniqueArray.has(selectedAnswer)){
        wronguniqueArray.delete(correctAnswers[questionNumber - 1]);
        console.log(wronguniqueArray);
    }
}


function showResults() {
    // Display the results page with the final score and correct options
    const percentage = (14 / 17) * 100;
    document.getElementById('result-percentage').innerText = `You scored ${percentage.toFixed(2)}%`;

    const correctOptionsList = document.getElementById('correct-options-list');
    const moviesToWatchList = document.getElementById('movies-to-watch-list');

    

    
    for (let i = 0; i < wronguniqueArray.size; i++) {
        // Compare user-selected answer with correct answer
        moviesToWatchList.innerText += `Movie to Watch: ${wronguniqueArray[i]}`;
    }
    console.log(moviesToWatchList);

    const startPage = document.getElementById('start-page');
    const resultsPage = document.getElementById('results-page');
    const quizPage = document.getElementById('quiz-page');
    
    // Reset any quiz-related data or states here
    userAnswers = [];

    // Show the results page and hide the other pages
    startPage.style.display = 'none';
    resultsPage.style.display = 'block';
    quizPage.style.display = 'none';
}