function DisplayClock() {
    let date = new Date();
    let time = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    document.getElementById("digitalClock").innerText = time;
}

setInterval(DisplayClock, 1000);
DisplayClock();
