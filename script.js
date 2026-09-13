
// ================================
// BIODATA JAVASCRIPT
// ================================

// Run when the page is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Biodata page loaded successfully.");

    // Get the biodata container
    const biodata = document.querySelector(".biodata");

    // Check whether biodata exists
    if (!biodata) {
        console.error("Biodata container not found.");
        return;
    }

    // Add a print button
    const printButton = document.createElement("button");

    printButton.textContent = "Print Biodata";
    printButton.className = "print-button";

    // Add button to the page
    biodata.appendChild(printButton);

    // Print biodata when button is clicked
    printButton.addEventListener("click", function () {
        window.print();
    });

});


// =================================
// FUNCTION TO UPDATE BIODATA
// =================================

function updateBiodata() {

    const name = document.getElementById("name");

    if (name) {
        console.log("Name:", name.textContent);
    }

}


// =================================
// IMAGE ERROR HANDLING
// =================================

const profileImage = document.querySelector(".photo img");

if (profileImage) {

    profileImage.addEventListener("error", function () {

        console.log("Profile image could not be loaded.");

        // Display a simple placeholder
        this.src =
            "https://via.placeholder.com/180x220?text=Profile+Photo";

    });

}


// =================================
// CURRENT DATE
// =================================

function getCurrentDate() {

    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const year = today.getFullYear();

    return `${day}/${month}/${year}`;
}


// Display current date in console
console.log("Current Date:", getCurrentDate());
