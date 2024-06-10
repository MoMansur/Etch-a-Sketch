const container =  document.getElementsByClassName('container')
const gridContainer = document.getElementById('gridContainer')

const sizeBtn = document.getElementById('size')

const colorInput = document.getElementById('ColorInput');


//RANGE 
const sizeRangeLabel =  document.getElementById('sizeRangeLabel')
const sizeRange = document.getElementById('sizeRange')



//COLORs
const colorGrids = document.querySelectorAll('.Color')


function drawBoard(){



    function createDiv(){
        const gridNum = prompt('size')

        for(let i=0; i<gridNum * gridNum; i++){
            const square = document.createElement('div')
            square.className = 'square' 
            gridContainer.append(square)

        }
    }
    function draw(){
    }

    function reset(){

    }


    return{createDiv}

}


drawBoard()


function start(){

}


function newDraw(){
    reset()
}


