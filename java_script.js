var sizeOfOuterGrid = 960;
var isMouseHover = false;
var gridColor = "rgb(255, 255, 144)";
var colorButton = "rgb(140, 140, 140)"
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
let colorOff = 'black';
const redButton = document.createElement("button");
const blackButton = document.createElement("button");
const blueButton = document.createElement("button");
const eraseButton = document.createElement("button");


/* Button to get the user input*/
const parent = document.querySelector('body');
const topButton = document.createElement("button");
topButton.textContent = "Click to define the number of grids";
topButton.id = "myButton";
parent.appendChild(topButton);

topButton.addEventListener('click', ()=>{ 
    [gridColumnsString ,numTotalGrid]= getInputFromUser();



const buttonContainer = document.querySelector('.secondContainer');
/*------------------Red button---------------------*/
redButton.textContent ="Red"
redButton.style.backgroundColor = colorButton;
redButton.style.color= 'red';
buttonContainer.appendChild(redButton);
redButton.addEventListener('click', ()=>{ 
    colorOff = 'red';
})
/*--------------------------------------------------*/

/*------------------Black button---------------------*/
blackButton.textContent ="Black"
blackButton.style.color= 'Black';
blackButton.style.backgroundColor = colorButton;
buttonContainer.appendChild(blackButton);
blackButton.addEventListener('click', ()=>{ 
    colorOff = 'black';
})

/*--------------------------------------------------*/
/*------------------blue button---------------------*/
blueButton.textContent ="Blue"
blueButton.style.color= 'blue';
blueButton.style.backgroundColor = colorButton;
buttonContainer.appendChild(blueButton);
blueButton.addEventListener('click', ()=>{ 
    colorOff = 'blue';
})

/*--------------------------------------------------*/
/*------------------Erase  button---------------------*/
eraseButton.textContent ="Erase"
eraseButton.style.color= 'white';
eraseButton.style.backgroundColor = colorButton;
buttonContainer.appendChild(eraseButton);
eraseButton.addEventListener('click', ()=>{ 
    colorOff = gridColor;
})

/*--------------------------------------------------*/


/* -------------Draw the grid-----------------------  */

const grid = document.querySelector('.container');
grid.id = "gridContainer";
grid.innerHTML = '';    
for (let i = 0; i < numTotalGrid; i++) {
    const square = document.createElement('div');
    square.classList.add("units");
    square.id = `units${i}`;
    grid.appendChild(square);
    square.style.backgroundColor = gridColor;
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
    space.style.backgroundColor = colorOff;
    
  }, false);
  space.addEventListener("mouseover", function(e){
    isMouseHover = true
    space.style.backgroundColor = 'yellow';
    console.log(isMouseHover)
  }, false);
})
/*------------------------------------------*/
});