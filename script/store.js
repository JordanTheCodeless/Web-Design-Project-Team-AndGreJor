opt1(0);
opt2(0);
opt3(0);

//Called the functions first so the value of each object was set to 0, enabling the use of the sbttl function without the need of selecting all of the options

function opt1(optn1){
    switch (optn1){
        case 1:
            optn1value = 3000;
            break;
        case 2:
            optn1value = 400;
            break;
        case 3:
            optn1value = 1500;
            break;
        default:
        optn1value = 0;
            break;

    }
    document.getElementById("opt1tot").innerHTML = "Option 1 is: " + optn1value + "$";
}

//Function called in category 1 to determine the price of the selected object

function opt2(optn2){
    switch (optn2){
        case 1:
            optn2value = 5000;
            break;
        case 2:
            optn2value = 2000;
            break;
        case 3:
            optn2value = 13000;
            break;
        default:
        optn2value = 0;
            break;

    }
    document.getElementById("opt2tot").innerHTML = "Option 2 is: " + optn2value + "$";
}

//Function called in category 2 to determine the price of the selected object

function opt3(optn3){
    switch (optn3){
        case 1:
            optn3value = 2500;
            break;
        case 2:
            optn3value = 500;
            break;
        case 3:
            optn3value = 350;
            break;
        default:
        optn3value = 0;
            break;

    }
    document.getElementById("opt3tot").innerHTML = "Option 3 is: " + optn3value + "$";
}



//Code understood with the aid of W3School:

//This function selects a div from the categories and deselects every other 
function selected(slc) {
    // Get the parent category div
    var category = slc.closest(".row");

    // Deselect all objects in the same category
    var objectsInCategory = category.querySelectorAll(".product");
    objectsInCategory.forEach(function (obj) {
        obj.classList.remove("selected");
    });

    // Select the clicked object
    slc.classList.add("selected");
}

//Code understood with the aid of W3School:

function removeOne(){
    var element1 = document.getElementsByClassName("one")[0];
    var element2 = document.getElementsByClassName("one")[1];
    var element3 = document.getElementsByClassName("one")[2];

    element1.classList.remove("selected");
    element2.classList.remove("selected");
    element3.classList.remove("selected");
}

function removeTwo(){
    var element1 = document.getElementsByClassName("two")[0];
    var element2 = document.getElementsByClassName("two")[1];
    var element3 = document.getElementsByClassName("two")[2];

    element1.classList.remove("selected");
    element2.classList.remove("selected");
    element3.classList.remove("selected");
}

function removeThree(){
    var element1 = document.getElementsByClassName("three")[0];
    var element2 = document.getElementsByClassName("three")[1];
    var element3 = document.getElementsByClassName("three")[2];

    element1.classList.remove("selected");
    element2.classList.remove("selected");
    element3.classList.remove("selected");
}

//Function called in category 3 to determine the price of the selected object

function sbttl(){
    var subtot = optn1value + optn2value + optn3value;
    document.getElementById("subtotal").innerHTML = "Subtotal is: " + subtot + "$";
    var taxF = subtot * .16;
    document.getElementById("tax").innerHTML = "Tax is: " + taxF + "$";
    var totalF = subtot + taxF;
    var totmoney = totalF.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    //Gives the format of currency to the final product
    document.getElementById("totaInfo").innerHTML = "Total is: " + totmoney;
    document.getElementById("amnt").innerHTML = totmoney
}

//Function to modify and dinamically display the amount of money owed for each service

