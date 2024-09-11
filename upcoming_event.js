document.addEventListener("DOMContentLoaded", function() {
    const patisserieStack = document.querySelectorAll("#patisserie-section .patisserie-card");
  
    patisserieStack.forEach((card) => {
      card.addEventListener("click", function() {
        this.classList.add("swap");
        this.addEventListener("animationend", function() {
          this.parentNode.appendChild(this);
          this.classList.remove("swap");
        });
      });
    });
  });