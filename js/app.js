



let round = 0
let board = document.getElementsByClassName("box")
let breakFlag

console.log(board)

const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const resetBoard = () => {
    for(let i = 0;i < board.length;i++){
        removeAllChildNodes(board[i])
        if(board[i].classList.contains('win')){
            board[i].classList.remove('win')
        }
        };

    round = 0
}


const checkwins = (winPiece) =>{
    let winCombos = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8],[2,4,6]]
    let tallyup = 0
    for(let i= 0; i<winCombos.length;i++){
        console.log(winCombos[i] + ": ")
        for(let j=0;j<winCombos[i].length;j++){

            if(board[winCombos[i][j]].innerHTML == `<h2>${winPiece}</h2>`){
                tallyup++
                console.log(board[winCombos[i][j]].innerHTML)
            }

        }
        if(tallyup == 3){
           return winCombos[i]     
        }
        
        tallyup = 0
    }
    return "go"

}

for (let i = 0;i<board.length;i++){
    let eachBox = board[i]
    let piece
    eachBox.addEventListener('click', function(event){
        if(breakFlag == 1){
            return 0
        }
        console.log("clicked")
        if (round % 2 == 0){
            piece = "X"
        }
        else{
            piece = "O"
        }
        if (eachBox.innerHTML == ""){
            eachBox.innerHTML = `<h2>${piece}</h2>`
            round = round + 1
            console.log(round)
        }
        else{

            if(round == 9){
                alert("Game already over why r u clicking")
            }
            else{
                alert("space has already been claimed!")
            }
        }


        let xWin = checkwins("X")
        let oWin = checkwins("O")
        console.log(xWin,oWin)
        switch(true){
            case (typeof xWin == 'object' || typeof oWin == 'object'):
                if(typeof xWin == 'object'){
                    for(let z=0;z<xWin.length;z++){
                        board[xWin[z]].classList.add('win')
                    }
                    alert("X Win! Reset Board Using Button")
                    breakFlag = 1
                }
                if(typeof oWin == 'object'){
                    for(let z=0;z<oWin.length;z++){
                        board[oWin[z]].classList.add('win')
                    }
                    alert("O Win! Reset Board Using Button")
                    breakFlag = 1
                }
                break
                
                

        }
        if(round == 9 && (typeof xWin != 'object' && typeof oWin != 'object')){
            alert('Tie')
            resetBoard()
        }
        
    }
    )
}

function clickHandler(event) {
    console.log('Button Clicked');
    resetBoard()
    breakFlag = 0
 }
const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);