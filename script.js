// add a navigaton div that will carry the elements to change grid size, color, etc.
// create container div for the grid
// what will be the size of the container?

// create flex container for the nav div and grid div

const navGridContainer = document.getElementById("nav-grid-flex-container")
const navDiv = document.getElementById("nav-div")
const gridContainer = document.getElementById("grid-container")


function createGrid(size) {
    const gridItemSize = 500 / size;

    // Create the grid divs
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
                
        // Apply inline styles to make it fit in the grid
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        gridItem.style.background = "white"

        // Append the grid item to the gridContainer
        gridContainerDiv.appendChild(gridItem);

    }
}