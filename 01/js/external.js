// window is our object
// onload is our eventListener will only perform the writeMessage function when 
// the page has *finished* loading.
// writeMessage is our function that we will run.
// as this function is associated with an eventListener it is treated as an EventHandler.
// In this case the function does not need to be called immediately when parsed but only
// when the event has been triggered. Hence we do not write the parentheses as the parentheses
// means to call the function when parsed (i.e. when read).

window.onload = writeMessage;

/*
Here we create our function called writeMessage. 
This function allows to search the document by an ID.
Once found then populate the innards of the tags
i.e. what is between the <h1> and the </h1> using 
the property .innerHTML
*/
function writeMessage() {
    //document is object
    //getElementById("helloMessage") is a sub-object <h1 id='helloMessage'></h1>
    //.innerHTML is a property of that sub-object
    //changing the property by assignment of = to whatever value we have after.
    document.getElementById("helloMessage").innerHTML = "Here we are!";
    
} 