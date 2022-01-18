var coll = document.getElementsByClassName("collapsible");
var i;
var image = document.getElementById("myImage");
var chHeading = document.getElementById("changeHeading");
var chPar = document.getElementById("changePar");



for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function changeOne(){
    image.src = "images/illustration-features-tab-1.svg";
    chHeading.innerHTML = "Bookmark in one click";
    chPar.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
}

function changeTwo(){
  image.src = "images/illustration-features-tab-2.svg";
  chHeading.innerHTML = "Intelligent search";
  chPar.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}

function changeThree(){
  image.src = "images/illustration-features-tab-3.svg";
  chHeading.innerHTML = "Share your bookmarks";
  chPar.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}