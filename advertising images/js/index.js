let images = [
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img6.jpg",
    "images/img7.jpg",
    "images/img8.jpg",
    "images/img10.jpg"
];

let index = 0;
let intervalId = setInterval(changeImage, 1000);

function changeImage() {
    document.getElementById("adImage").src = images[index];
    index++;
    if (index >= images.length) {
        index = 0;  
    }
}

document.getElementById("stopAds").onclick = function () {
    clearInterval(intervalId);
    
};

