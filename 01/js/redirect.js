// Step 1
// When the page has finished loading, run function initAll
window.onload = initAll;

// Step 2: Run this function
function initAll() {
    // when they click the link it runs another function called initRedirect
    // Step 3. Get the link
    // Step 4. Add onclick eventListener
    // Step 5. Add EventHandler "initRedirect"
    document.getElementById("redirect").onclick = initRedirect;
}

// Step 6: Write your eventHandler
function initRedirect() {
    // This bit of script tells the browser that it will go to a different page than what is indicated in the HTML.
    // Step 7: Override the HTML link
    window.location = "cutting-edge.html";
    // Step 8: Cancel the HTML Link.
    return false;
    
}