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
   document.getElementById("modal").style.top = "-460px";
}


// Modal Window

    var modal_one = document.getElementById('Modal_one');
    var modal_two = document.getElementById('Modal_two');
    var modal_free = document.getElementById('Modal_free');

    var btn_one = document.getElementById("application-form-one");
    var btn_two = document.getElementById("application-form-two");
    var btn_free = document.getElementById("application-form-three");

    var span = document.getElementsByClassName("close")[0];
    var spa = document.getElementsByClassName("close")[1];
    var sp = document.getElementsByClassName("close")[2];

    btn_one.onclick = function() {
        modal_one.style.display = "block";
    }
    btn_two.onclick = function() {
        modal_two.style.display = "block";
    }
    btn_free.onclick = function() {
        modal_free.style.display = "block";
    }

    span.onclick = function() {
        modal_one.style.display = "none";
    }
    spa.onclick = function() {
        modal_two.style.display = "none";
    }
    sp.onclick = function() {
        modal_free.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }