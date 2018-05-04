function myShowFunction() {
    document.getElementById("panel").style.display = "block";
}

function myFunction() {
  var x = document.getElementById("clap");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
