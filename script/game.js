function RanTreeArray(arr) {
  const RanTree = Math.floor(Math.random() * arr.length);
  const tree = arr[RanTree];
  arr.splice(RanTree, 1);
  return tree;
}

const TreesArray = ['../images/Windmill.jpg', '../images/MultipleWindmills.jpg', '../images/SolarPanel.jpg', '../images/SolarFarm.jpg', '../images/Teacher1.jpg', '../images/Teacher2.jpg',];
const TreeText = ['windmill pic 1', 'windmills pic', 'solar panel pic 1', 'solar panel pic 2', 'teacher pic 1', 'teacher pic 2',];

const shownImg = document.getElementById("GameOutput")
const nextBut = document.getElementById("nextBut")

nextBut.addEventListener("click", nextImg)

function nextImg() {
    if (TreesArray.length > 1){
        const ranInd = Math.floor(Math.random() * TreesArray.length);
        const selectImg = TreesArray.splice(ranInd, 1)[0];
        const selectTxt = TreeText.splice(ranInd, 1)[0];
        shownImg.src = selectImg;

        DisplayTxt = document.getElementById("Game").innerHTML = selectTxt
        // const Dis = RanTreeArray(TreesArray)
        // shownImg.src = Dis;
}else{
    const lastImg = TreesArray[0]
    shownImg.src = lastImg
    nextBut.disabled = true;
}
}
nextImg();
        

// while (TreesArray.length > 1){
//     const Dis = RanTreeArray(TreesArray);

// }
  
// const noImg = TreesArray(0);
// document.getElementById("GameOutput").src =  Dis;
