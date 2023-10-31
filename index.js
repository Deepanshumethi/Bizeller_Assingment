document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("right");
    const productCards = document.querySelector(".product_cards");
  
    button.addEventListener("click", () => {
      productCards.scrollLeft += 200;
      console.log("Clicked to scroll right");
    });
  
    const button1 = document.getElementById("left");
  
    button1.addEventListener("click", () => {
      productCards.scrollLeft -= 200;
      console.log("Clicked to scroll left");
    });
  });
  

  function myFunction() {
    var x = document.getElementsByClassName("hamber-nav")[0];
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
  }

