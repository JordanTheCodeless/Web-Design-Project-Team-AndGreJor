
var imageArray = ["../images/gameSolar.webp", "../images/gameCompost.webp", "../images/gameElectric.webp", "../images/gameDeforestation.webp", "../images/gamePlastic.webp"]
//Array for the images of the game


var questionsArray = ["Solar energy is a renewable source of power.", "Composting is an effective way to reduce waste and benefit the environment.", "Electric vehicles produce zero emissions and are environmentally friendly.", "Deforestation contributes to climate change and loss of biodiversity.", "Single-use plastics are a sustainable option for reducing waste."];
//Array for the questions of the game

var randomAnswers = [true, true, false, false, false];
//Array for the answers of the game

var currentQuestion = 0;
var score = 0;

//The input ...arrays lets you make the exact same output out of the 3 arrays, so when we call the math random function, it doesn't randomize the arrays in different order.
function arrayRandomizer(...arrays){
  var length = arrays[0].length;

  for (let i = length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    for (const array of arrays){
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

arrayRandomizer(imageArray, questionsArray, randomAnswers);

showQuestion();

function showQuestion() {
  if (currentQuestion < questionsArray.length) {
      document.getElementById("GameOutputImg").src = imageArray[currentQuestion];
      document.getElementById("randomQuestion").innerHTML = questionsArray[currentQuestion];
  } else {
      // In case all questions have been answered
      document.getElementById("randomQuestion").innerHTML = "Game Over! the final score was: " + score;
  }
}

function checkAnswer(buttonClick){
  var correctAnswer = randomAnswers[currentQuestion];

  if (buttonClick == correctAnswer) {
    score++;
    document.getElementById("scoreCounter").textContent = "Score: " + score;
  }
  currentQuestion++;
  showQuestion();

}