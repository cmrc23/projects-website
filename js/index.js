document.getElementById("photosoption").onclick = function () {
    window.location.href= "photos.html";
};

document.getElementById("graphicsoption").onclick = function () {
    window.location.href= "graphics.html";
};
document.getElementById("codeoption").onclick = function () {
    window.location.href= "code.html";
};

document.getElementById("photosbutton").onclick = function () {
    window.location.href= "photos.html";
};

document.getElementById("graphicsbutton").onclick = function () {
    window.location.href= "graphics.html";
};
document.getElementById("codebutton").onclick = function () {
    window.location.href= "code.html";
};

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
