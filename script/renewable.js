// this function is simple it works along with css to set all items in class "hidden" to not show up until they are called to by this function, which gets the by their id and inserts them into "activeTxt" making them visible.
function active(topChoice) {
    var chosenTop = document.getElementById(topChoice);
    var topText = chosenTop.innerHTML;
    document.getElementById("activeTxt").innerHTML = topText
}
