//The makeGrid() function
function makeGrid() {
  const gridHeight = $("#input_height").val(); //rows value
  const gridWidth = $("#input_width").val(); // cols value
  const table = $("#pixel_canvas"); // table

  //Clears table
  table.children().remove();

  //Sets max. dimensions of Canvas
  if (gridHeight > 200) {
    gridHeight = 200;
    $("#input_height").val(200);
  }
  if (gridWidth > 200) {
    gridWidth = 200;
    $("#input_width").val(200);
  }

  // Create raws
  for (let i = 0; i < gridHeight; i++) {
    table.append("<tr></tr>");
    //Creates cols
    for (let j = 0; j < gridWidth; j++) {
      table
        .children()
        .last()
        .append("<td></td>");
    }
  }

  table.on("click", "td", function() {
    //By click, introduce color through color picker
    let color = $("input[type='color']").val();
    //Apply color to cell
    $(this).attr("bgcolor", color); // bgColor for backgroundColor
  });
  table.on("dblclick", "td", function() { //dbclick for double click
    //Take color from color picker
    $(this).attr("bgcolor", ""); // aplly color to this table
  });
}

const button = $('input[type="submit"]');
//Event listener for cells
button.click(function(grid) {
  const drawCanvas = document.querySelector('#draw-canvas');
  drawCanvas.style.display = "block";
  grid.preventDefault();
  makeGrid();
});
