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

navGridContainer.appendChild(gridContainerDiv)


function createGrid(size) {
    // takes size of grid
    // creates a square grid of divs of size by size

}