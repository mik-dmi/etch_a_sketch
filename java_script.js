/*---- Asks the size of the grid to the user and returns a template to format the grid accordingly---*/
function getInputFromUser(){
    let numGrid = 102;
    let eachColumnWidth = null;
    let aux = null;
    while(numGrid > 100){
        numGrid = parseInt(prompt("Number of grid (less than 100):"));
        if(numGrid > 100 || isNaN(numGrid)  ) alert("Try again (a number between 1-100)");
    }
    eachColumnWidth = sizeOfOuterGrid / numGrid
    return [ `repeat(${numGrid}, ${eachColumnWidth}px)` ,(numGrid*numGrid) ];
}
/*-----------------------------------------------------------------------------------------------*/
/* -------------Draw the grid---------------------------------------------------------*/
function buildGrid(numSquares, templateForGridSize, grid){
    grid.id = "gridContainer";
    deleteGrid(document.querySelectorAll("div.units"));
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add("units");
        square.id = `units${i}`;
        grid.appendChild(square);
        square.style.backgroundColor = gridColor;
        square.style['border-color'] = 'white';
        square.style['border-style'] = 'hidden double dashed';
        square.style['border-width'] = 'thin'
    } 
    grid.style.gridTemplateColumns = templateForGridSize;
    grid.style.gridTemplateRows = templateForGridSize;
    }
    
    function deleteGrid(divUnits){
        for(var i = 0; i < divUnits.length; i++){
            divUnits[i].parentNode.removeChild(divUnits[i]);
        }
    }
/*------------------------------------------------------------------------------------- */
/*------------------- Different color buttons ---------------------------*/
function makeButtons(buttonData){
    const buttonContainer = document.querySelector('.secondContainer');
    const button = document.createElement("button");
    let color = null;
    button.textContent = buttonData.text;
    button.style.backgroundColor = colorButton;
    button.style.color = buttonData.letterColor; // Optional: Set a default text color for better visibility
    buttonContainer.appendChild(button);
    color = buttonData.colorOfMouse;
    button.addEventListener('click', ()=>{ 
        colorOff = buttonData.colorOfMouse;        
    })
}
/*-------------------------------------------------------------------------*/
/*--------------color of the mouse Trace--------------------------*/
function colorTrace(color, iterations){
    let maxVal = 0xFFFFFF;
    if( color != 'rainbow') return color;    
    else{
/* Rainbow effect */
    let maxVal = 255;
    let red = Math.floor(Math.random() * maxVal);
    let green = Math.floor(Math.random() * maxVal);
    let blue = Math.floor(Math.random() * maxVal);
    colorRGB = colorShade(red, green,blue, iterations);
             /*random color in #FFFFFF format*/
/* Rainbow effect */

    
        return colorRGB;
    }
}
/*--------- Changes the shade of a color. In this case is lighting the color----------- */
function colorShade(red, green,blue,  iterations){
    const percentage = iterations * 5;
    const darkValue = Math.round(percentage * 2.20);
    const darkRed = Math.max(0, red + darkValue);
    const darkGreen = Math.max(0, green + darkValue);
    const darkBlue = Math.max(0, blue + darkValue);
    
    return `rgb(${darkRed}, ${darkGreen}, ${darkBlue})`;
}
/*--------------------------------------------------------------------------------------*/

var sizeOfOuterGrid = 960;
var isMouseHover = false;
var gridColor = "rgb(255, 255, 154)";
var colorButton = "rgb(170, 170, 170)"

let inputUser = null;
let gridColumnsString = 'repeat(1, 960px)';
let numTotalGrid = 1;
let colorOff = 'red';
let iterations = 0;
let clickedButtonInfo = null;

const typesOfColors = [
    {text: "Red", letterColor: "red", colorOfMouse: "red" },
    {text: "Blue", letterColor: "blue", colorOfMouse: "blue" },
    {text: "Green", letterColor: "green", colorOfMouse: "green" },
    {text: "Rainbow", letterColor: "white", colorOfMouse: "rainbow"},
    {text: "Erase", letterColor: gridColor, colorOfMouse: gridColor }   
    
  ];

/*----------------Creation of elements in the DOM---------------*/
const topButton = document.createElement("button");
const redButton = document.createElement("button");
const blackButton = document.createElement("button");
const blueButton = document.createElement("button");
const eraseButton = document.createElement("button");
const rainBowButton = document.createElement("button");
const gridSelector = document.querySelector('.grid');

buildGrid(numTotalGrid, gridColumnsString, gridSelector); /* inicializing a grid */

/*-----------------Button and working grid from user input -----------------*/
const parent = document.querySelector('.container');
topButton.textContent = "Start by defining the number of grids";
topButton.id = "myButton";
topButton.style.fontSize = "25px";
topButton.style.pa = "20px";
parent.appendChild(topButton);
topButton.addEventListener('click', ()=>{ 
    [gridColumnsString ,numTotalGrid]= getInputFromUser();
    console.log(gridColumnsString + " ssdd " + numTotalGrid);
    deleteGrid(gridSelector);
    buildGrid(numTotalGrid, gridColumnsString, gridSelector);
    /* Leaves a trace of the mouse in the grid */
    let squareUnit = document.querySelectorAll("div.units");
    console.log(squareUnit);
    squareUnit.forEach((space) =>{
        space.addEventListener("mouseleave", function(e){
        isMouseHover = false
        iterations = (iterations < 20) ? iterations + 1 : 1;
        space.style.backgroundColor = colorTrace(colorOff, iterations);
        console.log("clicked2--" +clickedButtonInfo)
        
    }, false);
    space.addEventListener("mouseover", function(e){
        isMouseHover = true
        space.style.backgroundColor = colorTrace('yellow',iterations);
        
    }, false);
})
/*------------------------------------------*/
    
});
    for (const element of typesOfColors) {          /*buttons for the different mouse traces*/
         makeButtons(element);
    }  
   

