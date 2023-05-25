// Define an array of quiz questions and their options
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: 1
    },
    // Add more questions...
  ];

  // Global variables to track the current question and score
  let currentQuestion = 0;
  let score = 0;

  // Function to initialize the quiz
  function startQuiz() {
    showQuestion();
    document.getElementById("submit-button").addEventListener("click", checkAnswer);
  }

  // Function to display the current question and answer options
  function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const answerButtons = document.getElementById("answer-buttons");
    
    // Clear previous question and answer options
    questionContainer.innerHTML = "";
    answerButtons.innerHTML = "";

    // Display the current question
    questionContainer.innerText = quizData[currentQuestion].question;

    // Display the answer options as buttons
    for (let i = 0; i < quizData[currentQuestion].options.length; i++) {
      const button = document.createElement("button");
      button.innerText = quizData[currentQuestion].options[i];
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button);
    }
  }

  // Function to handle answer selection
  function selectAnswer(e) {
    const selectedButton = e.target;
    const correctAnswer = quizData[currentQuestion].correctAnswer;

    // Check if the selected answer is correct
    if (selectedButton.innerText === quizData[currentQuestion].options[correctAnswer]) {
      score++;
    }

    // Disable all answer buttons
    const answerButtons = document.getElementById("answer-buttons");
    const buttons = answerButtons.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  // Function to check the selected answer and proceed to the next question
  function checkAnswer() {
    currentQuestion++;

    // If there are more questions, display the next question
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      // If all questions have been answered, display the final score
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("submit-button").style.display = "none";
      document.getElementById("score-container").innerText = "Your score: " + score + "/" + quizData.length;
      document.getElementById("score-container").style.display = "block";
    }
  }

  // Start the quiz
  startQuiz();