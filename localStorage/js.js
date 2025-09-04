// const list = document.querySelector(".list");
// const input = document.querySelector("input");
// let arr = JSON.parse(localStorage.getItem("data")) || [];

// arr.forEach((element) => {
//     list.innerHTML += `<h1>${element}</h1>`;
// });

// function addItem() {
//     arr.push(input.value);
//     localStorage.setItem("data", JSON.stringify(arr));

//     list.innerHTML = '';

//     arr.forEach(element => {
//         list.innerHTML += `<h1>${element}</h1>`;
//     });

//     input.value = '';
// }

// // data from input => edit in local storage => edit in html
// // += print old data + new data 12 => 123 when i told it add 3 only
// // before for each delete list in html before loop

// const list = document.querySelector("tbody");
// const input = document.querySelector("input");
// let arr = JSON.parse(localStorage.getItem("data")) || [];

// arr.forEach((element) => {
//     list.innerHTML += `<h1>${element}</h1>`;
// });

// function addItem() {
//     arr.push(input.value);
//     localStorage.setItem("data", JSON.stringify(arr));

//     list.innerHTML = '';

//     arr.forEach(element => {
//         list.innerHTML += `<tr>
//                 <td>${element}</td>
//                 <td><button>delete</button></td>
//             </tr>`;
//     });

//     input.value = '';
// }

// function displayData(){
//     arr.forEach(element => {
//         list.innerHTML += `<tr>
//                 <td>${element}</td>
//                 <td><button>delete</button></td>
//             </tr>`;
//     });
// }

const list = document.querySelector("tbody");
const input = document.querySelector("input");

let arr = JSON.parse(localStorage.getItem("data")) || [];

// first load

function displayData() {
  arr.forEach((el, index) => {
    list.innerHTML += `<tr>
              <td>${el}</td>
              <td><button onclick='deleteItem(${index})' >delete</button></td>
              <td><button onclick='deleteItem(${index})' >edit</button></td>
            </tr>`;
  });
}

displayData();

function addItem() {
  // add to arary
  arr.push(input.value);
  //    update localstorage
  localStorage.setItem("data", JSON.stringify(arr));
  //   edit html
  list.innerHTML = "";
  displayData();
}
