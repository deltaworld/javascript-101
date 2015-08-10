// window is our object
// onload is our eventListener
// writeMessage is our function that we will run.

window.onload = writeMessage;

/*
Here we create our function called writeMessage. 
This function allows to search the document by an ID.
Once found then populate the innards of the tags
i.e. what is between the <h1> and the </h1> using 
the property .innerHTML
*/
function writeMessage() {
    document.getElementById("helloMessage").innerHTML = "Write this message";
}