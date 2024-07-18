document.querySelectorAll(".locations").forEach(function (item) {
    item.addEventListener("click", () => {
        var href = item.dataset.href;
        console.log(href);

        document.getElementById('mapIframe').innerHTML = 
        `<iframe
            src=${href}
            width="100%"
            height="500"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
        ></iframe>`
    });
});

// Function to handle contact form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const formData = {
        name,
        email,
        message
    };

    console.log('Contact form submitted:', formData);
    alert(`Thank you for reaching out, ${name}! Your message has been sent.`);
    
    document.querySelector('form').reset();
});
