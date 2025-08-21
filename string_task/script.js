// //string methods

// // trim(), toLowerCase(), toUpperCase(), replace(), slice(), indexOf(), lastIndexOf()
// let fullName = "  nORAN  aYMAN  "
// console.log(fullName = fullName.trim().toLowerCase()) //noran ayman
// console.log(fullName = fullName.replace("  ", " ")) //noran ayman
// fullName =fullName[0].toUpperCase() + fullName.slice(1, 6) + fullName[6].toUpperCase() + fullName.slice(7)
// console.log(fullName) //Noran Ayman

// let x= "frontend"
// console.log(x.slice(0, 4)) //front
// console.log(x.slice(4, 7)) //end;
// console.log(x.slice(0, 1).toUpperCase() + x.slice(1, 4) + x.slice(4, 7).toUpperCase()) //FrontEnd
// console.log(x.slice(0, 1).toUpperCase() + x.slice(1, 4) + x.slice(4, 7).toUpperCase().replace("E", "e")) //FrontEnd
// console.log(x.slice(0, 1).toUpperCase() + x.slice(1, 4) + x.slice(4, 7).toUpperCase().replace("E", "e").replace("D", "d")) //FrontEnd
// console.log(x.slice(-1)) //d;
// console.log(x.slice(-1,-3)) //undefined
// console.log(x.slice(-3, -1)) //en;
// console.log(x.slice(-3, -1).toUpperCase()) //EN

// let z= "hi n there n" //(search value, start index)
// console.log(z.indexOf("n")) //3;
// console.log(z.lastIndexOf("n")) //11;
// console.log(z.indexOf("n", 4)) //11; (search from index 4)
// console.log(z.lastIndexOf("n", 10)) //3; 
// console.log(z.indexOf("n", 12)) //-1; // (search from index 12, not found)
// console.log(z.lastIndexOf("n", 10)) //3;

// //repeat()
// console.log("noran ".repeat(3)) //noran noran noran;
// console.log("noran".repeat(0)) // (empty string)   

// //includes()
// console.log(z.includes("n")) //true;
// console.log(z.includes("n", 4)) //true; (search from index 4)
// console.log(z.includes("n", 12)) //false; (search from index 12, not found)

// //startsWith() and endsWith()
// console.log(z.startsWith("hi")) //true;
// console.log(z.startsWith("hi n")) //true;
// console.log(z.startsWith("hi n there n")) //true;
// console.log(z.startsWith("hi n there n ", 0)) //false; (search from index 0)
// console.log(z.startsWith("hi n there n", 1)) //false; (search from index 1) 
// console.log(z.endsWith("n")) //true;
// console.log(z.endsWith("n there n")) //true;
// console.log(z.endsWith("n there n ", 12)) //false; (search from index 12)
// console.log(z.endsWith("n there n", 11)) //true; (search from index 11)

// function isEmail (email){
//     email = email.trim();
//     console.log(email.includes("@") && email.endsWith(".com"));

    
// }
// isEmail("    user123@gmail.com   "); //true
// isEmail("user123@gmail"); //false   

// //comparison operators
// console.log(-"50" !== 50) //true, because -50 is not strictly equal to 50   ;

// console.log("50" == 50)   //true, because == checks for value equality and converts types if necessary
// console.log("50" === 50)  //false, because === checks for both value and type equality
// console.log("50" != 50)   //false, because != checks for value inequality
// console.log("50" !== 50)  //true, because !== checks for both value and type inequality
// console.log("50" > 50)    //false, because "50" is converted to a number for comparison
// console.log("50" < 50)    //false, because "50" is converted to a number for comparison
// console.log("50" >= 50)   //true, because "50" is converted     
// //to a number for comparison
// console.log("50" <= 50)   //true, because "50" is converted to a number for comparison
// console.log("50" == "50") //true, because both are strings with the same value
// console.log("50" === "50") //true, because both are strings with the same
// //value and type
// console.log("50" != "50") //false, because both are strings with the same
// //value
// console.log("50" !== "50") //false, because both are strings with the same  
// //value and type
// console.log("50" > "50")  //false, because both are strings with the


// //logical operators //and (&&), or (||), not (!)



// let userName="noran@gmail.com"
// let password="12345678!"
// function login(userName, password) {
//     if (userName.includes("@") && userName.includes(".") && password.length >= 8 && (password.includes("!") || password.includes("@") || password.includes("#"))) {
//         console.log("Login successful"); 
//     } else {
//         console.log("Login failed");
//     }
// }
// login(userName, password); //Login successful
// login("noran@gmail", "12345678!"); //Login failed


// // if - switch case
// age=20
// if (age==20){
//     console.log("third year");
    
// }
// grade=90
// if (grade>85){
//     console.log("A");
    
// }
// if(grade>75){
//     console.log("B");
// }
// if(grade>65){
//     console.log("C");   
// }
// // كل القيم هتطلع في الكونصل 
// // if one of the conditions is true, the rest will not be checked
// //use if-else if-else for multiple conditions
// if (grade > 85) {
//     console.log("A");   
// }
// else if (grade > 75) {      
//     console.log("B");
// }   
// else if (grade > 65) {
//     console.log("C");
// }
// else {
//     console.log("D");
// }


// //task
// function canPlay(age,hasPermission){
//     if (age>=18 || (age>=13 && hasPermission)) {
//         console.log("can play");
        
        
//     }  
//     else{
//         console.log("can't play");
        
//     }
// }
// canPlay(21)
// canPlay(13,true)
// canPlay(11)
// canPlay(15, false) //can't play


// job ="it"
// switch(job){
//     case "Manager":
//         console.log(8000);
//         break;
//     case "it":
//     case "support":
//         console.log(6000);
//         break;
//     case "Developer":
//     case "Designer":
//         console.log(7000);
//         break;
//     default :
//         console.log(4000);
//         break;
// }

// //array
// let arrays=["noran", "ayman", "frontend",40,true ,['hisham','somia']]
// //how to access array elements
// console.log(arrays[0]) //noran
// console.log(arrays[1]) //ayman;
// console.log(arrays[5])  //['hisham','somia']
// console.log(arrays[5][0]) //hisham  
// console.log(arrays[5][1]) //somia
// console.log(arrays.length) //6, length of the array
// arrays[0] = "noran alaa" //change the first element
// console.log(arrays[0]) //noran alaa



// let arra= [1,2,3,4]
// arra[100] = "hamada" //add a new element at index 100
// console.log(arra.length) //101 .... undefined




// //array is very important , any card sent as array
// //array of objects
// //each object represents a card with title, price, and image
// let cards = [
//     {title:"",price:50,img:""},
//     {title:"",price:50,img:""},
//     {title:"",price:50,img:""},


// ]
// let arrays2 = [1,2,3]
// console.log(arrays2.push(4)) //4, adds 4 to the end of the array and returns the new length;
// console.log(arrays2) // [1, 2, 3, 4]
// console.log(arrays2.pop()) // [1, 2, 3,]
// console.log(arrays2)
// console.log(arrays2.shift())
// console.log(arrays2)
// console.log(arrays2.unshift(7))
// console.log(arrays2)

// let arrees3 = [1,2,3,4,5]
// arrees3.unshift(arrees3.pop())
// console.log(arrees3) // [undefined, 1, 2, 3, 4, 5];
// arrees3.unshift(arrees3.pop())
// console.log(arrees3)
// arrees3.unshift(arrees3.pop())
// console.log(arrees3)
// arrees3.unshift(arrees3.pop())
// console.log(arrees3)
// arrees3.unshift(arrees3.pop())
// console.log(arrees3)







// // let arr = [1, 2, 3, 4, 5]
// // console.log(arr[0]) //1
// //array methods
// //push(), pop(), shift(), unshift(), splice(), slice()
// //push() and pop()
// // let fruits = ["apple", "banana", "orange"]
// // fruits.push("grape") //add "grape" to the end
// // console.log(fruits) //["apple", "banana", "orange", "grape"]
// // fruits.pop() //remove the last element
// // console.log(fruits) //["apple", "banana", "orange"]
// // //shift() and unshift()
// // fruits.shift() //remove the first element
// // console.log(fruits) //["banana", "orange"]
// // fruits.unshift("kiwi") //add "kiwi" to the beginning
// // console.log(fruits) //["kiwi", "banana", "orange"]
// // //splice() and slice()
// // fruits.splice(1, 1, "mango") //remove 1 element at index 1 and add "mango"
// // console.log(fruits) //["kiwi", "mango", "orange"]




// // remove duplicates from an array by using function using
// function removeDuplicates(arr) {
//     let uniqueArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArray.includes(arr[i])) {
//             uniqueArray.push(arr[i]);
//         }
//     }

// }
// let numbers = ["z", "ahmed","samir","ahmed","ibrahim", "z"];
// let uniqueNumbers = removeDuplicates(numbers);













// function isPalindrome(text) {
//     var reverse = text.split("").reverse().join(""); 
//     console.log(text === reverse);

// }
// isPalindrome("racecar"); // true
// isPalindrome("noran"); // false

// function EvenNumbers() {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// EvenNumbers(); 

// function sumArray(arr) {
//     var sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);

// }
// sumArray([70, 80, 90, 50, 980]); 



for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) {
        continue; 
    }
    console.log(i); 
}

let arr=[1,2,-50,20,-20]
let newArray = arr.map((el, index) => {
    return -el;
});
console.log(newArray); 
// want to add 100 to each element in the array
let grades = [50,20,70]
let updatedGrades = grades.map((el, index) => {
    return el + 100;
});
console.log(updatedGrades); 



// remove negative numbers from array using map
let arr2 = [-20, -2, 50, 70,50,80,-1,52];
let g = arr2.map((el)) => {

}















//  functions in javascript (this,scopes)
// regular
function Add(){

}
// anonymous
let Add2 = function(){};
// arrow function
let Add3 = () => {};
Add3();

// higher order function
// in react higher order component
// function that takes another function as an argument
// forEach, map, filter, reduce

// task take array and turn positive numbers to negative numbers and negative numbers to positive numbers
// loop , push to new array and keep old data in save
// let arr=[1,2,-50,20,-20]
// let newArray =[]
// arr.forEach((el, index) => {
//     newArray.push(el * -1); 
// });

//map method
// map creates a new array with the results of calling a provided function on every element in the







// remove negative numbers from array using map
// let arr2 = [-20, -2, 50, 70,50,80,-1,52];
// let g = arr2.map((el)) => {
    
// }


// filter method
// let z = arr2.filter((el) => {
//     return el >= 0; // keep only positive numbers
// }

// reduce method
// let sum = arr2.reduce((acc, el) => {
//     return acc + el; 
// }, 0); 
// console.log(sum);

// objects in javascript
// how to add keys
// let person = {
//     name: "noran",
//     age: 20,
//     job: "frontend developer"
// };
// person.email = "

// check if object has a key
//  es6 for of , for in 


// dom 
// QuerySelector (one element , first), QuerySelectorAll,1(all elements) 
// document.querySelector("h1") // select first h1 element
// document.querySelectorAll("h1") // select all h1 elements
// document.querySelector(".hamada") // select first element with class "hamada"
// document.querySelectorAll(".hamada") // select all elements with class "hamada"
// document.querySelector("#myId") // select element with id "myId"
// document.querySelectorAll("#myId") // select all elements with id "myId" (should be only one)
// document.querySelector("div > p") // select first p element inside a div







let userInput = prompt("Enter your name");
let newElement = document.createElement("h1");
newElement.textContent = userInput;
let mySection = document.getElementById("name");
mySection.appendChild(newElement); 


















// codewars problems




































// //split() and join()
// let fruits = "apple,banana,orange"
// let fruitArray = fruits.split(",")
// console.log(fruitArray) //["apple", "banana", "orange"]
// console.log(fruitArray.join(" - ")) //apple - banana - orange

// //split()
// let str = "noran,ayman,frontend"
// let arr = str.split(",")
// console.log(arr) //["noran", "ayman", "frontend"]
// console.log(arr[0]) //noran
// console.log(arr[1]) //ayman
// console.log(arr[2]) //frontend
// console.log(arr.length) //3


// function check (email){
//     if (email.includes("@") && email.includes(".")) {
//         console.log("Valid email");
//     } else {
//         console.log("Invalid email");
//     }
// }
// check("user123@gmail.com"); // Valid email
// check("user123gmail.com");  // Invalid email

// function checkPassword(password) {
//     if (password.length >= 8 && password.includes("!") || password.includes("@") || password.includes("#")) {
//         console.log("Valid password");
//     } else {
//         console.log("Invalid password");
//     }
// }
// checkPassword("123456788!"); // Valid password
// checkPassword("1234567@");  // Invalid password


// function checkUsername(username) {
//     if (username.length >= 5 && username.length <= 15 && !username.includes(" ")) {
//         console.log("Valid username");
//     } else {
//         console.log("Invalid username");
//     }
// }
// checkUsername("noran123"); // Valid username
// checkUsername("nor an123"); // Invalid username
// checkUsername("nor"); // Invalid username   