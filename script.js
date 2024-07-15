let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset")
let newGame=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turnO=true; //player x, plaverO

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO=true;
    ensableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
   
    box.addEventListener("click", ()=>{
        if(turnO){
            box.classList.add("x");
            box.innerText="O";
            turnO= false;
        }
            else{
            
                box.innerText="X";
                turnO=true;
            }
        box.disabled=true;

        chekWinner();
    });

});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const ensableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{

    msg.innerText=`Congartulations winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const chekWinner=()=>{
    for(let pattern of winPatterns){

     let pos1Val=    boxes[pattern[0]].innerText;
     let pos2Val=    boxes[pattern[1]].innerText;
     let pos3Val=    boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val !="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val==pos3Val){

            showWinner(pos1Val);
        
        }

    }
}
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);