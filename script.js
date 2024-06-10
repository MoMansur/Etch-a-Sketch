const container =  document.getElementsByClassName('container')
const gridBox = document.getElementById('gridBox')

const sizeBtn = document.getElementById('size')

const colorInput = document.getElementById('ColorInput');


//RANGE 
const sizeRangeLabel =  document.getElementById('sizeRangeLabel')
const sizeRange = document.getElementById('squaresPerSide')

const colorGrids = document.querySelectorAll('.Color')

const gridContainer = document.getElementById('gridContainer');
const generateGridButton = document.getElementById('generateGridButton');
const squaresPerSideInput = document.getElementById('squaresPerSide');

function createGrid() {
    
    gridContainer.innerHTML = '';

   
    const squaresPerSide = squaresPerSideInput.value;
    document.documentElement.style.setProperty('--squares-per-side', squaresPerSide);

    // Create squares
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        gridContainer.appendChild(square);

        colorInput.addEventListener('change', ()=>{
            square.style.backgroundColor = colorInput.value
        })
    }
}

sizeRange.addEventListener('input', ()=>{
    sizeRangeLabel.textContent = sizeRange.value
})




generateGridButton.addEventListener('click', createGrid);