const cursor = document.querySelector(".cursor");
console.log(cursor);

document.body.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
})

