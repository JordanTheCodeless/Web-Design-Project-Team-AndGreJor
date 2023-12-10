// function RanTreeArray(arr) {
//   const RanTree = Math.floor(Math.random() * arr.length);
//   const tree = arr[RanTree];
//   arr.splice(RanTree, 1);
//   return tree;
// }

var dataArray = [{ imgpath: '../images/Windmill.jpg', text: 'windmill'},
{ imgpath: '../images/MultipleWindmills.jpg', text: 'windmills'},
{ imgpath: '../images/SolarPanel.jpg', text: 'solarpanel'},
{ imgpath: '../images/SolarFarm.jpg', text: 'solarfarm'},
{ imgpath: '../images/Teacher1.jpg', text: 'teacherpoint'},
{ imgpath:  '../images/Teacher2.jpg', text: 'teacherstudent'}];

var shownImg = document.getElementById("GameOutput")
var nextBut = document.getElementById("nextBut")
var scoreCounter = document.getElementById("scoreCounter")
var gameAns = document.getElementById("GameAnswers")
var score = 0
var currentEntry

nextBut.addEventListener("click", nextImg)

function nextImg() {
  if (dataArray.length > 0) {
    var randomIndex = Math.floor(Math.random() * dataArray.length);
    currentEntry = dataArray.splice(randomIndex, 1)[0];

    shownImg.src = currentEntry.imgpath;
    document.getElementById("randomGenerated").innerText = currentEntry.text;
 
    // Reset radio buttons
    var radioButtons = document.getElementsByName("yesOrNo");
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
 
    // Update score display
    scoreCounter.innerText = "Score: " + sc
}else{
    nextBut.disabled = true;
  }
}

function checkAnswer() {
  var radioButtons = document.getElementsByName("yesOrNo");
 
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var userAnswer = radioButtons[i].value.toLowerCase();
      var correctAnswer = currentEntry.text.toLowerCase().replace(/\s/g, '');

      if (userAnswer === correctAnswer) {
        score++;
      } else {
        score--;
      }
        // Update score display
        scoreCounter.innerText = "Score: " + score;
        break;
        }
      }
    }
    
document.addEventListener("DOMContentLoaded", function () {
nextImg();
});

// Add an event listener to the radio buttons
gameAnswers.addEventListener("change", checkAnswer);
