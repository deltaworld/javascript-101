window.onload = function () {
 
    if (document.getElementById ) { // truthy statement
        for (var i = 0; i < 24; i++) {
            // refactored to a function that sets the square with a number.
            setSquare(i);    
        }
        
        // JS: Closure
        function setSquare(i) {
            
            function getRandomNumber(max) {
                // creates a random number between 1 - 75
                var newNum = Math.floor(Math.random() * max) + 1;  // randNu = 73
                return newNum;
            }
            
            // Refactor Current Square to an independent local variable.
            var currSquare = "square" + i;  // "square0"
            
            // The index refers to the square.no and the value of the array tells us the column number.
            var colPlace = [0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4];
            
            // This gets the current element from the HTML page.
            var currSquareElement = document.getElementById(currSquare); // <td id="square0"></td>
            
            
            
            //finds the required element and populates it with random number newNum
            currSquareElement.innerHTML = getRandomNumber(75); // <td id="square0">73</td>
        }
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}



