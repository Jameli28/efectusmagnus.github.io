function showHide() {
  var x = document.getElementById("text-box");
  if (x.style.display === "none") { //if the text is hidden,
    x.style.display = "block"; //then, show text
  } else {
    x.style.display = "none"; //else, hide it.
  }
}
