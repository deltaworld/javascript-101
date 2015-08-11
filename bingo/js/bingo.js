window.onload = function () {
 
    if (document.getElementById ) { // truthy statement
        for (var i = 0; i < 24; i++) {
            // refactored to a function that sets the square with a number.
            setSquare(i);    
        }
        
        // JS: Closure
        function setSquare(i) {
            
            
            
            var factor = 15;
            
            // Refactor Current Square to an independent local variable.
            var currSquare = "square" + i;  // "square0"
            
            // The index refers to the square.no and the value of the array tells us the column number.
            var colPlace = [0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4]; // we need to * 15
            
            //var newNum =  colPlace[i] * factor + getRandomNumber(factor);
            var newNum = getRandomNumber( 
                
                // min
                factor * colPlace[i] + 1, 
                
                // max
                colPlace[i] + 1 * factor + (factor * colPlace[i]) - colPlace[i]
                ); 
            
            
            // This gets the current element from the HTML page.
            var currSquareElement = document.getElementById(currSquare); // <td id="square0"></td>
            
            //finds the required element and populates it with random number newNum
            currSquareElement.innerHTML = newNum; // <td id="square0">73</td>
        }
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function getRandomNumber(min, max) {
                
    var newNum = Math.floor(Math.random() * (max - min + 1)) + min; 
    return newNum;
}



