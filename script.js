const gridContainer = document.querySelector("#grid");
let same = 0;
let size = 16;
for (let i=0; i<size*size; i++) {
    let gridComponent = document.createElement("div");
    gridComponent.setAttribute("class", "component");
    same = 500 / size;
    gridComponent.style.width = `${same}px`;
    gridComponent.style.height = `${same}px`;
    gridComponent.style.flex = "0 0 auto";
    gridContainer.appendChild(gridComponent);
}