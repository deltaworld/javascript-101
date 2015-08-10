var name = prompt("Type your name here: ", "Enter Name Here");

        //
if ( !(name === "" || name === null || name === "null")  ) { // condition is true or false.
    // if true do these instructions
    alert("Welcome, " + name + ". How are you today?" );
} else {
    
    alert("You didn't type anything.");
}