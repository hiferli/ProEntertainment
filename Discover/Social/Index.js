document.addEventListener("DOMContentLoaded", function () {
    const spinner = document.getElementById("spinner");
    const socialMediaContainer = document.getElementById(
        "socialMediaContainer"
    );

    // Show spinner
    spinner.style.display = "block";

    // Fetch social media data
    fetch("http://localhost:3000/socialMedia")
        .then((response) => response.json())
        .then((data) => {
            // Hide spinner
            spinner.style.display = "none";

            // Iterate over each social media post
            data.posts.forEach((post) => {
                // Create card structure for each post
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "col-md-6", "mb-4");
                card.innerHTML = `
                        <div class="card h-100">
                            <img src="${post.photo}" class="card-img-top" alt="${post.platform}">
                            <div class="card-body">
                                <h5 class="card-title">${post.platform}</h5>
                                <p class="card-text">${post.username}</p>
                                <p class="card-text">Likes: ${post.likes}</p>
                                <button onclick='copyLink(this)' data-platform='${post.platform}'>Share</button>
                            </div>
                        </div>
                    `;

                // Append card to social media container
                socialMediaContainer.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Error fetching social media data:", error);
            // Hide spinner in case of error
            spinner.style.display = "none";
        });
});

const copyLink = (d) => {
    let platform = d.getAttribute('data-platform');

    if(platform === "Facebook"){
        navigator.clipboard.writeText('https://facebook.com/');
        
    } else if(platform === "Instagram") {
        navigator.clipboard.writeText('https://instagram.com/');
    } else {
        console.log("Error! No such social media found.");
    }
}