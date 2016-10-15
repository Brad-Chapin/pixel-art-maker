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
      col.class = "color-cell";
      row.appendChild(col);
    }
    tbl.appendChild(row);
  }
  document.body.appendChild(tbl);
};

canvas (35, 76);

function palette (){
  var pal = document.createElement("table");
  pal.id = "palette";
  var newRow = document.createElement("tr");
    for (ww = 0; ww < 25; ww++){
      var newCell = document.createElement("td");
      newCell.style.height = "40px";
      newCell.style.width = "40px";
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
        break;
        case (4):
        newCell.style.backgroundColor = "orange";
        break;
        case (5):
        newCell.style.backgroundColor = "green";
        break;
        case (6):
        newCell.style.backgroundColor = "purple";
        break;
        case (7):
        newCell.style.backgroundColor = "violet";
        break;
        case (8):
        newCell.style.backgroundColor = "brown";
        break;
        case (9):
        newCell.style.backgroundColor = "deeppink";
        break;
        case (10):
        newCell.style.backgroundColor = "silver";
        break;
        case (11):
        newCell.style.backgroundColor = "gold";
        break;
        case (12):
        newCell.style.backgroundColor = "black";
        break;
        case (13):
        newCell.style.backgroundColor = "";
      }
        newRow.appendChild(newCell);
        }
      pal.appendChild(newRow);
      document.body.appendChild(pal);
    }
palette ();

var colorPalette = document.getElementById("palette");
var pixelTable = document.getElementById("canvas");
// var colorCells = document.getElementsByClass("color-cell");

function paint (event){
  if (event.target.tagName == "TD"){
    event.target.style.backgroundColor = currentColor;
}
};

pixelTable.addEventListener ("click", paint);
var currentColor = "";
colorPalette.addEventListener ("click", function (){
  currentColor = event.target.style.backgroundColor;
});

pixelTable.addEventListener("mousedown", function(){
  pixelTable.addEventListener("mouseover", function(){
    if (event.target.tagName == "TD"){
    event.target.style.backgroundColor = currentColor;
    console.log("testing");
  }
  });
});

pixelTable.addEventListener("mouseup", function(){
  pixelTable.removeEventListener("mouseover", function(){
    console.log("testing");
  });
});
