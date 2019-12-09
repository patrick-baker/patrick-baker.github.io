$(document).ready(readyNow);

function readyNow() {
    console.log('In jQuery.js');
    setTileHeight(); 
    $(".project-tile").on("mouseover", showProjectDescription);
    $(".project-tile").on("mouseout", hideProjectDescription);
}

window.onscroll = function() {scrollFunction()};
window.onresize = function() {setTileHeight()}

// dynamically changes the height of the navbar based on page scroll
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.padding = "30px 10px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px 30px 10px";
  }
}

// sets height of project tiles
function setTileHeight() {
  var projectTile = $('.project-tile');
  var width = projectTile.width();
  projectTile.css('height', width);
};

// makes project description visible on hover of project tile
function showProjectDescription() {
  var projectDescription = $(this).children('.project-description');
  projectDescription.css("display", "flex");
}

function hideProjectDescription() {
  var projectDescription = $(this).children('.project-description');
  projectDescription.css("display", "none");
}
