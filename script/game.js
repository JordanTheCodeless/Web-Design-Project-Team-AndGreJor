function RanTreeArray(arr) {
  const RanTree = Math.floor(Math.random() * arr.length);
  const tree = arr[RanTree];
  arr.splice(RanTree, 1);
  return tree;
}

const TreesArray = [{ imgpath: '../images/Windmill.jpg', Ans: 'windmill'},
{ imgpath: '../images/MultipleWindmills.jpg', Ans: 'windmills'},
{ imgpath: '../images/SolarPanel.jpg', Ans: 'solarpanel'},
{ imgpath: '../images/SolarFarm.jpg', Ans: 'solarfarm'},
{ imgpath: '../images/Teacher1.jpg', Ans: 'teacherpoint'},
{ imgpath:  '../images/Teacher2.jpg', Ans: 'teacherstudent'}];

const shownImg = document.getElementById("GameOutput")
const nextBut = document.getElementById("nextBut")

nextBut.addEventListener("click", nextImg)

function nextImg() {
    if (TreesArray.length > 1){
        const ranInd = Math.floor(Math.random() * TreesArray.length);
        const selectInd = TreesArray.splice(ranInd, 1)[0];
        const selectImg = selectInd.imgpath;
        const selectAns = selectInd.Ans;

        shownImg.src = selectImg;

        document.getElementById("Game").innerHTML = selectAns
        // const Dis = RanTreeArray(TreesArray)
        // shownImg.src = Dis;
}else{
    const lastInd = TreesArray[0]
    shownImg.src = lastInd.imgpath;
    document.getElementById("Game").innerHTML = lastInd.Ans;
    nextBut.disabled = true;
}
}
nextImg();
        

// while (TreesArray.length > 1){
//     const Dis = RanTreeArray(TreesArray);

// }
  
// const noImg = TreesArray(0);
// document.getElementById("GameOutput").src =  Dis;
