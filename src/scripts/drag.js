let miVentana = document.querySelectorAll(".miVentana");
let p;
miVentana.forEach(e => {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    e.addEventListener("mousedown", dragStart);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", drag);

    function dragStart(event) {
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;

        if (event.target === e) {
            isDragging = true;
        }
    }

    function dragEnd(event) {
        initialX = currentX;
        initialY = currentY;

        isDragging = false;
    }

    function drag(event) {
        if (isDragging) {
            event.preventDefault();

            currentX = event.clientX - initialX;
            currentY = event.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, e);
        }
    }

    function setTranslate(xPos, yPos, element) {
        element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        // También aplicamos la transformación al texto dentro del elemento
        p = document.querySelector(`.${element.getAttribute("name")}`);
        p.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
});
