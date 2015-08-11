window.onload = function () {
 
    for (var i = 0; i < 24; i++) {
        // refactored to a function that sets the square with a number.
        setSquare(i);    
    }
}

function setSquare(argument) {
    // creates a random number between 1 - 75
    var newNum = Math.floor(Math.random() * 75) + 1;
    
    //finds the required element and populates it with random number newNum
    document.getElementById("square" + argument).innerHTML = newNum;
}

