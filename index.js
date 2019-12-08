$(document).ready(readyNow);

function readyNow() {
    console.log('In jQuery.js');
    setTileHeight(); 
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
  var projectTile = $('.card-img-top');
  var width = projectTile.width();
  projectTile.css('height', width);
};
