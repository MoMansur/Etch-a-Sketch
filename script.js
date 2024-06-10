const container =  document.getElementsByClassName('container')
const gridBox = document.getElementById('gridBox')

const sizeBtn = document.getElementById('size')
const resetBtn = document.getElementById('resetBtn')

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


        function theHover(color){
            square.style.backgroundColor = color
        }
        let isClicked= true

        function squareEvent(color){

            

            square.addEventListener('mouseover', ()=>{

                if(isClicked){
                    theHover(color)
                }else{

                }
                isClicked = !isClicked
            })
         
          
        }
        
        function reset(){
            resetBtn.addEventListener('click', ()=>{
                square.style.backgroundColor = ''
            })
        }
        reset()



        function colorEvent(){
            let color = colorInput.value

            colorInput.addEventListener('change', ()=>{
                let color = colorInput.value
                squareEvent(color)
                gridBoxEvent()
                      
            }) 
            gridBoxEvent(color)
   
        }

        colorEvent()

        let clickCount = 0;
        function gridBoxEvent(color){


            gridContainer.addEventListener('click', ()=>{
 
                squareEvent(color)

        
            })

            gridContainer.addEventListener('dblclick', ()=>{
                square.style.backgroundColor = ''
                
            })
        }

        function draw(){
            gridBoxEvent()
        
        }

    }



}

sizeRange.addEventListener('input', ()=>{
    sizeRangeLabel.textContent = sizeRange.value
})


createGrid()


generateGridButton.addEventListener('click', createGrid);