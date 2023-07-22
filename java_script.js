var sizeOfOuterGrid = 960;
var isMouseHover = false;

function getInputFromUser(){
    let numGrid = 102;
    let eachColumnWidth = null;
    let aux = null;
    



    while(numGrid > 100){
        numGrid = parseInt(prompt("Number of grid (less than 100):"));
        if(numGrid > 100) alert("do it again");
    }
    eachColumnWidth = sizeOfOuterGrid / numGrid
    
    aux  = `repeat(${numGrid}, ${eachColumnWidth}px)`
    console.log(aux)
    let aux_sec = numGrid*numGrid;
    console.log(aux_sec )
    return [ aux ,aux_sec ];
}





let inputUser = null;
let gridColumnsString = null;
let numTotalGrid = null;





/* Button to get the user input*/
const parent = document.querySelector("body");
const topButton = document.createElement("button");
topButton.textContent = "Click to define the number of grids";
topButton.id = "myButton";
parent.appendChild(topButton);

topButton.addEventListener('click', ()=>{ 
    [gridColumnsString ,numTotalGrid]= getInputFromUser();









/* -------------Draw the grid-----------------------  */

const grid = document.querySelector('.container');
grid.id = "gridContainer";
grid.innerHTML = '';    
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

grid.style.gridTemplateColumns = gridColumnsString;
grid.style.gridTemplateRows = gridColumnsString;

/*--------------------------------------------------- */


/* Leaves a trace of the mouse in the grid */
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
/*------------------------------------------*/
});