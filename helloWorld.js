console.log("hello world");

// Cannot seem to get this eventListener to work on the nav bar.
var navBar = document.getElementById("navbar");

function hoverEffect(event) {
  event.target.style.color = "white";
  event.target.style.background = "black";
  event.target.style.fontSize = "xx-large";

  setTimeout(function() {
    event.target.style.color = "";
    event.target.style.background = "";
    event.target.style.fontSize = "";
  }, 500);
}

// It keeps telling me navBar is null, yet I defined the variable in the first line.
navBar.addEventListener("mouseover", hoverEffect);
