let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true; // player X , player 0

const winPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const reset = () => {
    turnX = true;
    enabledBoxs();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){ //player X
            box.innerText = "X";
            turnX = false; 
        }else{ //player O
            box.innerText = "O"
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxs = () => {
    for(let box of boxes ){
    box.disabled = true;
    }
};

const showWinner = (winner) => { 
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disabledBoxs();
};

const enabledBoxs = () => {
    for(let box of boxes ){
    box.disabled = false;
    box.innerText = "";
    }
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos1val === pos3val) {
            console.log("Winner", pos1val);
            showWinner(pos1val); // Pass the winner to showWinner
        }
    }
};

resetbtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);