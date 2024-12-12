
/******************************/
/*Menu Openen*/
/******************************/

// bron: https://codepen.io/shooft/pen/VwJXNEg


var openButton = document.querySelector("header > button");
openButton.onclick = openMenu;

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}




/************************************/
/*Menu Sluiten*/
/************************************/

var sluitButton = document.querySelector("nav button");
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}




/**********************************/
/* menu sluiten met escape */
/**********************************/

window.onkeydown = handleKeydown; 

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}