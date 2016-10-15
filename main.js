function canvas (height, width){
  var tbl = document.createElement("table");
  tbl.id ="canvas";
  for (h = 0; h < height; h++){
    var row = document.createElement ("tr");
    for (w = 0; w < width; w++){
      var col = document.createElement("td");
      col.style.height = "10px";
      col.style.width = "10px";
      col.style.borderWidth = "1px";
      col.style.borderColor = "black";
      col.style.borderStyle = "solid";
      col.style.backgroundColor = "white";
      row.appendChild(col);
    }
    tbl.appendChild(row);
  }
  document.body.appendChild(tbl);
};

canvas (30, 75);

function palette (){
  var pal = document.createElement("table");
  pal.id = "palette";
  var newRow = document.createElement("tr");
    for (ww = 0; ww < 4; ww++){
      var newCell = document.createElement("td");
      newCell.style.height = "30px";
      newCell.style.width = "30px";
      newCell.style.borderWidth = "2px"
      newCell.style.borderStyle = "solid";
      newCell.style.borderColor = "black";
      switch (ww){
        case (0):
        newCell.style.backgroundColor = "red";
        break;
        case (1):
        newCell.style.backgroundColor = "blue";
        break;
        case (2):
        newCell.style.backgroundColor = "lime";
        break;
        case (3):
        newCell.style.backgroundColor = "yellow";
      }
        newRow.appendChild(newCell);
        }
      pal.appendChild(newRow);
      document.body.appendChild(pal);
    }
palette ();

var pixelTable = document.getElementById("canvas");

pixelTable.addEventListener("click", function(){
  if (event.target.style.backgroundColor == "white"){
    event.target.style.backgroundColor = "red";
  } else {
    event.target.style.backgroundColor = "white";
  }
});
