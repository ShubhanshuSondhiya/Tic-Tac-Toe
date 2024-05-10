let hide = document.querySelector(".hide");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let p1 = true;
const winPattern = [
    [0,1,2],
    [0,3,6], 
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    p1 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(p1){
            box.innerText="O";
            p1= false;
        }
        else{
            box.innerText="X";
            p1= true;
        }
        box.disabled= true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;  
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;  
        box.innerText = ""; 
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () =>{
    for(let pattern of winPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if(position1!="" && position2!=""&& position3!=""){
            if(position1==position2&& position2==position3){
                disableBoxes();
                showWinner(position1);
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
