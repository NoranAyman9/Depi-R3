const Images = document.querySelectorAll("img");
const parent = document.querySelector(".parent");

for (let index= 0 ; index < Images.length; index++){
    Images[index].addEventListener("mouseenter" , (e) => {
        console.log(e.target.src);
        parent.style.backgroundImage =`url(${e.target.src})`;
    });
}