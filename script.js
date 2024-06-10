const container = document.getElementsByClassName('container');
const gridBox = document.getElementById('gridBox');
const sizeBtn = document.getElementById('size');
const resetBtn = document.getElementById('resetBtn');
const colorInput = document.getElementById('ColorInput');
const sizeRangeLabel = document.getElementById('sizeRangeLabel');
const sizeRange = document.getElementById('squaresPerSide');
const gridContainer = document.getElementById('gridContainer');
const generateGridButton = document.getElementById('generateGridButton');
const squaresPerSideInput = document.getElementById('squaresPerSide');
const rainbowBtn = document.getElementById('rainbowBtn')

function createGrid() {
    gridContainer.innerHTML = '';
    const squaresPerSide = squaresPerSideInput.value;
    document.documentElement.style.setProperty('--squares-per-side', squaresPerSide);

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        gridContainer.appendChild(square);
    }
    drawing(colorInput.value || 'black');
}


sizeRange.addEventListener('input', () => {
    sizeRangeLabel.textContent = `${sizeRange.value} x ${sizeRange.value}`;
});

resetBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});

function drawing(color) {
    let isDragging = false;
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mousedown', () => {
            isDragging = true;
            square.style.backgroundColor = color;
        });

        square.addEventListener('mouseover', () => {
            if (isDragging) {
                square.style.backgroundColor = color;
            }
        });

        square.addEventListener('mouseup', () => {
            isDragging = false;
        });
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

generateGridButton.addEventListener('click', createGrid);

colorInput.addEventListener('change', () => {
    let color = colorInput.value;
    drawing(color);
});

createGrid();
