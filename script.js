// add a navigaton div that will carry the elements to change grid size, color, etc.
// create container div for the grid
// what will be the size of the container?

// create flex container for the nav div and grid div

const navGridContainer = document.createElement("div")
navGridContainer.id = "nav-grid-flex-container"

navGridContainer.style.display = "flex"
navGridContainer.style.padding = "30px"
navGridContainer.style.gap = "50px"

document.body.appendChild(navGridContainer)

// create navigation div

const navDiv = document.createElement("div")
navDiv.id = "nav-div"
navDiv.className = "nav-elements-div"

navDiv.style.border = "1px solid red"
navDiv.style.width = "300px"
navDiv.style.height = "500px"

navGridContainer.appendChild(navDiv)

// create and style grid container

const gridContainerDiv = document.createElement("div")
gridContainerDiv.className = "grid-flex-container"
gridContainerDiv.id = "grid-container"

gridContainerDiv.style.width = "500px"
gridContainerDiv.style.height = "500px"
gridContainerDiv.style.background = "white"
gridContainerDiv.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"
gridContainerDiv.style.display = "flex"
gridContainerDiv.style.flexWrap = "wrap"

navGridContainer.appendChild(gridContainerDiv)


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