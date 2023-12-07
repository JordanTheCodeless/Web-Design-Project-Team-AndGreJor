//   function active(topChoice) {
//     var chosenTop = document.getElementById(topChoice);
//     var topText = chosenTop.innerHTML;
//     document.getElementById("").innerHTML = topText
// }
while (TreesArray.length > 0) {
    function RanTreeArray(arr) {
      const RanTree = Math.floor(Math.random() * arr.length);
      const tree = arr[RanTree];
      return tree;
      TreesArray.pop(Rantree)
    }
  }
  const TreesArray = ['../images/Windmill.jpg', '../images/MultipleWindmills.jpg', '../images/SolarPanel.jpg', '../images/SolarFarm.jpg', '../images/Teacher1.jpg', '../images/Teacher2.jpg',];
  
  const Dis = RanTreeArray(TreesArray);
  document.getElementById("GameOutput").src =  Dis;
