var name = prompt("Type your name here");

if (!(name === "null" || name === null || name === "")) {
    alert("Hello, " + name + " how are you this morning?");
} else {
    alert("I need your name to continue.");
}

// {
//     if !(name ==="null" || name === null || name === ""){
//         alert("Hello" + name + "how are you this morning?");
//     }

// else {
//     alert("I need your name to continue.");
// }