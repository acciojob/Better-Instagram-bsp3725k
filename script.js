// Variable to store the dragged element
let draggedElement = null;

// Get all draggable elements
const draggables = document.querySelectorAll(".image");

// Add event listeners for drag and drop events
draggables.forEach((draggable) => {
  // Drag start
  draggable.addEventListener("dragstart", (e) => {
    draggedElement = e.target; // Store the dragged element
    e.target.classList.add("selected"); // Add a visual effect to indicate dragging
  });

  // Drag end
  draggable.addEventListener("dragend", (e) => {
    e.target.classList.remove("selected"); // Remove the visual effect
    draggedElement = null; // Clear the dragged element reference
  });

  // Drag over
  draggable.addEventListener("dragover", (e) => {
    e.preventDefault(); // Prevent default to allow drop
  });

  // Drop
  draggable.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent default drop action

    // Swap the background images of the dragged and dropped elements
    const draggedBg = draggedElement.style.backgroundImage;
    draggedElement.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = draggedBg;

    // Swap the inner text of the two elements (if necessary)
    const draggedText = draggedElement.textContent;
    draggedElement.textContent = e.target.textContent;
    e.target.textContent = draggedText;
  });
});
