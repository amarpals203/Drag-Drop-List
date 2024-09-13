const sortableList = document.querySelector(".sortable-list");

document.querySelectorAll(".item").forEach(item => {
    // Add class when dragging starts
    item.addEventListener("dragstart", () => item.classList.add("dragging"));

    // Remove class when dragging ends
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const handleDragOver = (e) => {
    e.preventDefault();
    
    const draggingItem = document.querySelector(".dragging");
    const items = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Find the next sibling based on cursor position
    const nextSibling = items.find(item => e.clientY <= item.offsetTop + item.offsetHeight / 2);

    // Insert the dragging item before the next sibling
    sortableList.insertBefore(draggingItem, nextSibling);
};

// Handle drag events
sortableList.addEventListener("dragover", handleDragOver);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
