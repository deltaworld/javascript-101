window.onload = function () {
 
    for (var i = 0; i < 24; i++) {
        // refactored to a function that sets the square with a number.
        setSquare(i);    
    }
    
    // JS: Closure
    function setSquare(i) {
        
        // Refactor Current Square to an independent local variable.
        var currSquare = "square" + i;  // "square0"
        
        // grabs the td element from the html
        var currSquareElement = document.getElementById(currSquare); // <td id="square0"></td>
        
        // creates a random number between 1 - 75
        var newNum = Math.floor(Math.random() * 75) + 1;  // randNu = 73
        
        //populates the elemnt  with random number newNum
        currSquareElement.innerHTML = newNum; // <td id="square0">73</td>
    }
}

