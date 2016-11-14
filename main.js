function canvas (height, width){
//creates the cannvas table
  var tbl = document.createElement("table");
  tbl.id ="canvas";
//creates the canvas rows
  for (h = 0; h < height; h++){
    var row = document.createElement ("tr");
//creates the canvas columns, and styles them, adds ID's for later access
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

canvas (35, 76);

function palette (){
//creates the palette table
  var pal = document.createElement("table");
  pal.id = "palette";
//creates the row
  var newRow = document.createElement("tr");
//creates the buttons (columns) and styles them
    for (ww = 0; ww < 24; ww++){
      var newCell = document.createElement("td");
      newCell.style.height = "40px";
      newCell.style.width = "40px";
      newCell.style.borderWidth = "2px"
      newCell.style.borderStyle = "solid";
      newCell.style.borderColor = "black";
      newCell.id = ww;
//adds colors to the palette buttons
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
        newCell.style.backgroundColor = "white";
        break;
        case (14):
        newCell.style.backgroundColor = "cornflowerblue";
        break;
        case (15):
        newCell.style.backgroundColor = "burlywood";
        break;
        case (16):
        newCell.style.backgroundColor = "darkgoldenrod";
        break;
        case (17):
        newCell.style.backgroundColor = "darkmagenta";
        break;
        case (18):
        newCell.style.backgroundColor = "darkred";
        break;
        case (19):
        newCell.style.backgroundColor = "darkturquoise"
        break;
        case (20):
        newCell.style.backgroundColor = "dimgrey";
        break;
        case (21):
        newCell.style.backgroundColor = "forestgreen";
        break;
        case (22):
        newCell.style.backgroundColor = "lightsalmon";
        break;
        case (23):
        newCell.style.backgroundColor = "olive";
      }
        newRow.appendChild(newCell);
        }
//creates custom color picker structure; function to be added below
        var custom =  document.createElement("input");
        custom.type = ("color");
        custom.style.width = "50px";
        custom.id = ("mixer");
        newRow.appendChild(custom);
        var button = document.createElement("button");
        button.innerText = "Custom Colors!";
        button.style.width = "55px";
        button.id = "colorButton";
        newRow.appendChild(button);
      pal.appendChild(newRow);
      document.body.appendChild(pal);
    }
palette ();

//adds a label to the white selector for improved UX
var whiteBlock = document.getElementById("13");
whiteBlock.innerText = "white";

//adds directions for improved UX
var directions = document.createElement("p");
directions.style.fontSize = ("15px");
document.body.appendChild(directions);
directions.innerText = "Click on the color of your choice; point and click to color single pixels, or click and drag to paint larger areas. Use white if you need an eraser. The last button is a color picker. Above all, HAVE FUN!"

//defines several code blocks for ease of maintenance
var colorPalette = document.getElementById("palette");
var pixelTable = document.getElementById("canvas");
var colorButton = document.getElementById("colorButton");
var mixer = document.getElementById("mixer");

//adds currently selected color to the clicked location(s)
function paint (event){
  if (event.target.tagName == "TD"){
    event.target.style.backgroundColor = currentColor;
}
};

//makes the color clicked on the palette the current color
pixelTable.addEventListener ("click", paint);
var currentColor = "";
colorPalette.addEventListener ("click", function (){
  currentColor = event.target.style.backgroundColor;
});

//starts continuous paint mode on mousedown, ends it on mouseup
pixelTable.addEventListener ("mousedown", addPaint);

function addPaint (event) {
  pixelTable.addEventListener ("mouseover", multiPaint);
};

function multiPaint (event) {
  if (event.target.tagName == "TD"){
    event.target.style.backgroundColor = currentColor;
  }
};

pixelTable.addEventListener ("mouseup", function(){
  pixelTable.removeEventListener ("mouseover", multiPaint);
});

colorButton.addEventListener ("click", picker);

function picker (event){
  currentColor = mixer.value;
  console.log (mixer.value);
  console.log (currentColor);
};
