document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const images = document.querySelectorAll(".image-container img");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", function () {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
  
        const filter = this.getAttribute("data-filter");
  
        images.forEach(image => {
          if (filter === "all" || image.getAttribute("data-category") === filter) {
            image.style.display = "block";
          } else {
            image.style.display = "none";
          }
        });
      });
    });
  });
  