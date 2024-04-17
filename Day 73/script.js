const div1 = document.getElementById("div1");
const div = document.getElementById("div");

let left = 0;
let topPosition = 0;

document.addEventListener("keydown", function(event) {
    const divRect = div.getBoundingClientRect();
    const div1Rect = div1.getBoundingClientRect();

    const divWidth = divRect.width;
    const divHeight = divRect.height;

    const div1Width = div1Rect.width;
    const div1Height = div1Rect.height;

    switch(event.key) {
        case "ArrowLeft":
            left = Math.max(left - 10, 0);
            break;
        case "ArrowRight":
            left = Math.min(left + 10, divWidth - div1Width);
            break;
        case "ArrowUp":
            topPosition = Math.max(topPosition - 10, 0);
            break;
        case "ArrowDown":
            topPosition = Math.min(topPosition + 10, divHeight - div1Height);
            break;
    }

    div1.style.left = left + "px";
    div1.style.top = topPosition + "px";
});