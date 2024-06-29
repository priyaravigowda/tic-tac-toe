let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msg=document.querySelector("#msg");
let msg2=document.querySelector("#msg2");


let count=0;
let turnO = true;
//build a 2d array for the winning pattern
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//click to make an action
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        console.log("box was clicked");
        count++;
        console.log("the count is ", count);
        if(turnO){
            box.innerHTML="O";
            box.style.color="#9c6644";
            turnO=false;
        }else{
            box.innerHTML="X";
            box.style.color="#d4a373";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const enableBoxes=()=>
    {
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    };

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msg.classList.add("hide");
};



const disableBoxes=()=>
    {
        for(let box of boxes){
            box.disabled=true;
        }
    };

const showWinner=(winner)=>{
    msg.innerText=`Congrats, winner is  ${winner}`;
    msg.classList.remove("hide");
};

const draw=()=>{
    msg2.innerText="it's a draw!";
    msg2.classList.remove("hide");
};


const checkwinner=()=>{
   for( let pattern of winPattern) {//the loop runs 8 times of winning pattern
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                disableBoxes();
                showWinner(pos1Val);
                return;
            }
        }
   }
   if(count===9 )
    draw();
};




newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
