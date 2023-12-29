let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".winnerMsg-container");
let msgWinner = document.querySelector(".winnerMsg");
let newGameBtn = document.querySelector("#newGameBtn");
let resetBtn = document.querySelector("#reser-btn");
let winningPattens = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let turnO = true;
let count = 0;

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
            count++;
        }else{
            box.innerText = "X";
            turnO = true;
            count++;
        }
        
        if(count >= 9){
            drawGame();
        }

        box.disabled = true;
        checkWinner();
    });
});

const drawGame = () =>{
    msgWinner.innerText = 'Game is Draw no one is Winner';
    msgContainer.classList.remove('hide');
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add('hide');
    count = 0;
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
    count = 0;
};


const checkWinner = () =>{
    for(let pattern of winningPattens){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is : ", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};


const showWinner = (winner) =>{
    msgWinner.innerText = `Congratulations Winner is : ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};


newGameBtn.addEventListener("click", enableBoxes);
resetBtn.addEventListener("click", enableBoxes);