// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all filter buttons and books
    const filterBtns = document.querySelectorAll(".filter-btn");
    const books = document.querySelectorAll(".book");

    // Add click event listeners to filter buttons
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Remove 'active' class from all filter buttons
            filterBtns.forEach((btn) => btn.classList.remove("active"));
            // Add 'active' class to the clicked filter button
            btn.classList.add("active");
            // Get the filter value from the clicked button
            const filterValue = btn.getAttribute("data-filter");
            // Iterate over each book
            books.forEach((book) => {
                // Hide all books by default
                book.style.display = "none";
                // Show the book if it matches the filter value or if the filter is set to 'all'
                if (book.classList.contains(filterValue) || filterValue === "all") {
                    book.style.display = "block";
                }
            });
        });
    });
});
