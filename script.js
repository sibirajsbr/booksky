// Selecting popup box, popup overlay, and button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

// Show popup when "Add" button is clicked
addpopupbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

// Select cancel button
var cancelpopup = document.getElementById("cancel-popup");

// Hide popup when "Cancel" button is clicked
cancelpopup.addEventListener("click", function (event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Select container and form elements
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-Author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Handle the form submission for adding a new book
addbook.addEventListener("click", function (event) {
    event.preventDefault();

    // Validate inputs
    if (booktitleinput.value.trim() === "" || 
        bookauthorinput.value.trim() === "" || 
        bookdescriptioninput.value.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Create new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
                     <h5>${bookauthorinput.value}</h5>
                     <p>${bookdescriptioninput.value}</p>
                     <button>Delete</button>`;
    
    // Attach delete event listener to the newly created button
    var deleteButton = div.querySelector("button");
    deleteButton.addEventListener("click", deletebook);

    // Append new book to the container
    container.appendChild(div);

    // Reset form fields
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescriptioninput.value = "";

    // Hide popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Function to delete a book
function deletebook(event) {
    event.target.parentElement.remove();
}
