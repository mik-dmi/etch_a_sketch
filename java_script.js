var sizeOfOuterGrid = 960;
var isMouseHover = false;

function getInputFromUser(){
    let numGrid = null;
    let eachColumnWidth = null;
    let aux = null;
    numGrid = parseInt(prompt("Number of grid:"));
    eachColumnWidth = sizeOfOuterGrid / numGrid
    
    aux  = `repeat(${numGrid}, ${eachColumnWidth}px)`
    console.log(aux)
    let aux_sec = numGrid*numGrid;
    console.log(aux_sec )
    return [ aux ,aux_sec ];
}





const grid = document.querySelector('.container');
let inputUser = null;
let gridColumnsString = null;
let numTotalGrid = null;


[gridColumnsString ,numTotalGrid] = getInputFromUser();
grid.innerHTML = '';
const square = document.createElement('div');
for (let i = 0; i < numTotalGrid; i++) {
    const square = document.createElement('div');
    square.classList.add("units");
    square.id = `units${i}`;
    grid.appendChild(square);
    square.style.backgroundColor = 'skyblue';
    square.style['border-color'] = 'black';
    square.style['border-style'] = 'solid';
    square.style['border-width'] = 'thin'
} 
console.log(gridColumnsString)

grid.style.gridTemplateColumns = gridColumnsString;
grid.style.gridTemplateRows = gridColumnsString;


let squareUnit = document.querySelectorAll("div.units");
console.log(squareUnit);
squareUnit.forEach((space) =>{
    space.addEventListener("mouseleave", function(e){
    isMouseHover = false
    space.style.backgroundColor = 'blue';
    
  }, false);
  space.addEventListener("mouseover", function(e){
    isMouseHover = true
    space.style.backgroundColor = 'red';
    console.log(isMouseHover)
  }, false);
})

