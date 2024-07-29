const gridContainer = document.querySelector("#grid");
let size = 0;
function drawGrid(size) {
    let same = 0;
    for (let i=0; i<size*size; i++) {
        let gridComponent = document.createElement("div");
        gridComponent.setAttribute("class", "component");
        same = 500 / size;
        gridComponent.style.width = `${same}px`;
        gridComponent.style.height = `${same}px`;
        gridComponent.style.flex = "0 0 auto";
        // gridComponent.style.backgroundColor = "red";
        gridContainer.appendChild(gridComponent);
    }
}

function deleteGrid() {
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstElementChild);
    }
}

function rainbowPaint(target) {
    let randomNumber1 = Math.floor(Math.random() * 255);
    let randomNumber2 = Math.floor(Math.random() * 255);
    let randomNumber3 = Math.floor(Math.random() * 255);

    target.style.backgroundColor = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
}

function paintGrid() {
    let gridComponents = document.querySelectorAll(".component");
    gridComponents.forEach((gridComponent) => {
        gridComponent.addEventListener("mouseenter", (event) =>{
            rainbowPaint(event.target);
        })
    })    
}

drawGrid(16);
paintGrid();

let changeSizeBtn = document.querySelector("#changeSizeBtn");
changeSizeBtn.addEventListener("click", ()=> {
    let changeSize = document.querySelector("#changeSize").value;
    size = parseInt(changeSize);
    if (!isNaN(size) && size > 0 && size <= 100) {
        deleteGrid();
        drawGrid(size);
        paintGrid();
    } else {
        alert("Please enter a valid number.");
    }
})