// let userInput = prompt("Enter your name");
// let newElement = document.createElement("h1");
// newElement.textContent = userInput;
// let mySection = document.getElementById("name");
// mySection.appendChild(newElement); 


// innerHTML vs innerText(textcontent)
let table = document.querySelector("table");
console.log(table.innerHTML); // logs the HTML content of the table
console.log(table.innerText); // logs the text content of the table
let div = document.querySelector("div");
div.innerHTML = "<h1 style="color:red">New content</h1>"; // sets the HTML content of the div
let userInput = prompt("Enter your name:");
let newElement = document.querySelector("h1");