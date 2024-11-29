// JavaScript Document
console.log("hi");

var eersteImagesButton = document.querySelector("section.images li:nth-of-type(1) button");

// de button naar kliks later luisteren
// als er geklikt wordt, wordt de functie 'eersteImagesButtonKlik' uitgevoerd
eersteImagesButton.onclick = eersteImagesButtonKlik;

// de functie 'eersteImagesButtonKlik'
function eersteImagesButtonKlik() {
  // als het bijbehorden menu gesloten is, en geopened wordt
  // het aria-expanded attribuut van de button op true zetten
  if (eersteImagesButton.ariaExpanded == "false") {
    eersteImagesButton.ariaExpanded = "true"
  }
  // anders vice versa
  else {
    eersteImagesButton.ariaExpanded = "false"
  }
}