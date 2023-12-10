// function RanTreeArray(arr) {
//   const RanTree = Math.floor(Math.random() * arr.length);
//   const tree = arr[RanTree];
//   arr.splice(RanTree, 1);
//   return tree;
// }

var TreesArray = [{ imgpath: '../images/Windmill.jpg', Ans: 'windmill'},
{ imgpath: '../images/MultipleWindmills.jpg', Ans: 'windmills'},
{ imgpath: '../images/SolarPanel.jpg', Ans: 'solarpanel'},
{ imgpath: '../images/SolarFarm.jpg', Ans: 'solarfarm'},
{ imgpath: '../images/Teacher1.jpg', Ans: 'teacherpoint'},
{ imgpath:  '../images/Teacher2.jpg', Ans: 'teacherstudent'}];

var shownImg = document.getElementById("GameOutput")
var nextBut = document.getElementById("nextBut")
var userInput = document.getElementById("UserGuess")
var ScoreDisplay = document.getElementById("Game")
var score = 0
var correctAns

nextBut.addEventListener("click", nextImg)
function nextImg() {
    if (TreesArray.length > 0){
        var ranInd = Math.floor(Math.random() * TreesArray.length);
        var selectInd = TreesArray.splice(ranInd, 1)[0];
        var selectImg = selectInd.imgpath;
        // var selectAns = selectInd.Ans;
        correctAns = selectInd.Ans

        shownImg.src = selectImg;

        userInput.value = ""
        checker();
        ScoreDisplay.innerHTML = "score:" +score
        // const Dis = RanTreeArray(TreesArray)
        // shownImg.src = Dis;
}else{
    // var lastInd = TreesArray[0]
    // shownImg.src = lastInd.imgpath;
    // document.getElementById("Game").innerHTML = lastInd.Ans;
    nextBut.disabled = true;
}
}

function checker() {
  var Guess = userInput.value
    if (Guess === correctAns){
      score++
      scoreUpdate();
    }
}

function scoreUpdate() {
  ScoreDisplay.innerHTML = "you got " +score+ " correct";
}
document.addEventListener("DOMContentLoaded", function (){
  nextImg();
})

// while (TreesArray.length > 1){
//     const Dis = RanTreeArray(TreesArray);
// }
// const noImg = TreesArray(0);
// document.getElementById("GameOutput").src =  Dis;
