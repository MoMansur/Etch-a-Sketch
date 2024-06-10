const container =  document.getElementsByClassName('container')
const gridBox = document.getElementById('gridBox')

const sizeBtn = document.getElementById('size')

const colorInput = document.getElementById('ColorInput');


//RANGE 
const sizeRangeLabel =  document.getElementById('sizeRangeLabel')
const sizeRange = document.getElementById('sizeRange')



//COLORs
const colorGrids = document.querySelectorAll('.Color')


function drawBoard(){

 function divGridBuilder(size) {
            console.log(`Building grid of size: ${size}`);
            // Add your div grid building logic here
        }

        function colorGridFunc(connect, connect2) {
            connect.forEach(color => {
                color.addEventListener('click', (e) => {
                    let colorName = color.getAttribute('data-color');
                    console.log(colorName);
                });
            });

            connect2.addEventListener('input', () => {
                sizeRangeLabel.textContent = sizeRange.value;
                divGridBuilder(sizeRange.value);
            });
        }

        colorGridFunc(colorGrids, sizeRange);

        function divGridBuilder(size) {
            // Clear existing divs
            gridBox.innerHTML = '';

            if(size > 0) {
                for(let i = 0; i < size; i++) {
                    const div = document.createElement('div');
                    div.className = 'divClass';
                    div.style.backgroundColor = 'green';

                    gridBox.appendChild(div);
                }
            }
        }
        

    return{colorGridFunc, divGridBuilder}
}


drawBoard()


function start(){

}

function reset(){

}
function newDraw(){
    reset()
}


function draw(){


   
}