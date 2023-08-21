document.addEventListener("DOMContentLoaded", function () { 
  const filterButtons = document.querySelectorAll(".filter-button");
  const images = document.querySelectorAll(".image-container > div"); // Select image containers instead of individual images
  
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
  
      const filter = this.getAttribute("data-filter");
  
      images.forEach(image => {
        const imageCategory = image.querySelector("h1").getAttribute("data-category"); // Get the data-category attribute from the h1 element
        if (filter === "all" || imageCategory === filter) {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});
