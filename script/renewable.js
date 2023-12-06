function active(topChoice) {
    var chosenTop = document.getElementById(topChoice);
    var topText = chosenTop.innerHTML;
    document.getElementById("activeTxt").innerHTML = topText
}

const TreesArray = [];

function TreeArray() {
    var tree = Math.floor(Math.random() * 7);
    document.getElementById("GameTxt").innerHTML = "game" + tree + "tree";
    document.getElementById("Game").innerHTML = "hello world";  
}

TreeArray();


