document.addEventListener("DOMContentLoaded", function () {
    const blogsContainer = document.getElementById("blogsContainer");

    // Fetch blogs data
    fetch("http://localhost:3000/blogs")
        .then((response) => response.json())
        .then((data) => {
            // Iterate over each blog category
            Object.keys(data).forEach((category) => {
                // Create heading for each category
                const categoryHeading = document.createElement("h2");
                categoryHeading.textContent = category.replace("_", " ");
                categoryHeading.style.textTransform = 'capitalize'

                // Append category heading to blogs container
                blogsContainer.appendChild(categoryHeading);

                // Iterate over blog posts in each category
                data[category].forEach((post) => {
                    // Create blog post element
                    const blogPost = document.createElement("article");
                    blogPost.classList.add("card", "mb-4" , "container");

                    blogPost.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${post.headline}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${post.source}</h6>
                            <p class="card-text">${post.summary}</p>
                            <p class="card-text"><small class="text-muted">${post.date}</small></p>
                        </div>
                    `;

                    // Create link element to the source
                    const sourceLink = document.createElement("a");
                    sourceLink.href = "https://www.forbesindia.com/blog/"; // Replace with actual source URL if available
                    sourceLink.classList.add("stretched-link"); // Bootstrap class to make entire card clickable
                    sourceLink.setAttribute("target", "_blank"); // Open link in new tab

                    // Append link to blog post element
                    blogPost.appendChild(sourceLink);

                    // Append blog post to blogs container
                    blogsContainer.appendChild(blogPost);
                });
            });
        })
        .catch((error) => console.error("Error fetching blogs:", error));
});
