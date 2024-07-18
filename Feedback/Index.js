// formSubmission.js

function setRating(value) {
    document.getElementById("rating").value = value;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const description = document.getElementById("description").value;
        const rating = document.getElementById("rating").value;

        // Basic validation (you can expand this as needed)
        if (!name || !email || !description || !rating) {
            alert("Please fill out all fields.");
            return;
        }

        // Simulate form submission (replace this with actual submission logic)
        console.log("Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Description:", description);
        console.log("Rating:", rating);

        alert("Thank you for your feedback!");

        // Optionally reset the form after submission
        form.reset();
        setRating(0); // Reset the rating
    });
});
