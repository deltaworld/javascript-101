// initialise array of Flags for random numbers.
var numFlags = [];

window.onload = function () {
 
    if ([].indexOf ) { // truthy statement for support ie9+
        for (var i = 0; i < 24; i++) {
            // reFACTORed to a function that sets the square with a number.
            setSquare(i);    
        }
        
        // JS: Closure
        function setSquare(thisSquare) {
            
            // Returns a random integer between min (included) and max (included)
            function getRandomNumber(min, max) {
                var newNum = Math.floor(Math.random() * (max - min + 1)) + min; 
                return newNum;
            }

            function constructColumnArray(num, removeInt) {
                // initialise array
                var colInts = [];
            
                // A nested for loop for creating num lots of numbers in an array.
                for (var i = 0; i < num; i++) {
                  for (var j = 0; j < num; j++) {
                      //push through the inner loop number (j)
                      colInts.push(j);
                  }
                }
                // get the index value of the number we want to remove.
                var index = colInts.indexOf(removeInt);
                
                // Splice only if the index exists; index = -1 -> number does not exist.
                if (index > -1) {
                  // from the position of 2 remove one value from the array.
                  colInts.splice(index, 1);
                }
                // sort your array numerically
                colInts.sort();
            
                // return the array.
                return colInts;
            }
            // CONSTANT
            var FACTOR = 15;

            // Refactor Current Square to an independent local variable.
            var currSquare = "square" + thisSquare;  // "square0"
            
            // The index refers to the square.no and the value of the array tells us the column number.
            // https://goo.gl/U2rE5k jsBin playground
            var colPlaces = constructColumnArray(5, 2);
            
            // Base multiplication for the start of the range
            var colBasis = FACTOR * colPlaces[thisSquare]; // 0, 15, 30, 45, 60 (for each column)
            
            // Defining the min and max of random number generated
            var min = colBasis + 1; // reason we need to add 1, *1*-15, *16*-30
            var max = FACTOR + colBasis; // the max will always be 15 more than the min.
            
            
            // This gets the current element from the HTML page.
            var currSquareElement = document.getElementById(currSquare); // <td id="square0"></td>
            
            // finds the required element and populates it with random number newNum
            // Check if not(Flag is true) // number hasn't been used.
            
            // initialise the random number variable.
            var newNum;
            // keep on generating a new random number as long as the flag is true.
            // if the flag is empty, exit the loop.
            do {    
                // Gets random number for each of the columns dynamically.
                newNum = getRandomNumber(min, max); 
            } while (numFlags[newNum])
                // Set Flag to newNum to true. ie turn flag on.
                numFlags[newNum] = true;
                // Publish
                currSquareElement.innerHTML = newNum; // <td id="square0">73</td>
        
            console.log(numFlags);
        }
        
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

