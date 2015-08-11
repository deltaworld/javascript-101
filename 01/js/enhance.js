window.onload = function () {

    document.getElementById("enhance").onclick = initRedirect;

    function initRedirect() {
        alert("We are not responsible for the content on the following link");
    
        // Whatever the HTML link is, replicate it.. 
        // this refers to the original html link.
    
        window.location = this;
        // to avoid the browser going to the same link twice.
        return false;
    }
    
}

