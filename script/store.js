opt1(0);
opt2(0);
opt3(0);

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

function sbttl(){
    var subtot = optn1value + optn2value + optn3value;
    document.getElementById("subtotal").innerHTML = "Subtotal is: " + subtot + "$";
    var taxF = subtot * .16;
    document.getElementById("tax").innerHTML = "Tax is: " + taxF + "$";
    var totalF = subtot + taxF;
    document.getElementById("totaInfo").innerHTML = "Total is: " + totalF + "$"
}