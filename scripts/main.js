// Smooth Scroll
      
const links = document.querySelectorAll(".arrow");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}
  // Menu

function openModal() {
   document.getElementById("modal").style.top = "-20px";
}

function closeModalMenu() {
   document.getElementById("modal").style.top = "-470px";
}