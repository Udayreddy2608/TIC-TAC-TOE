let boxes=document.querySelectorAll(".tile");
let reset=document.querySelector('#reset-btn');
let win=document.querySelector('.win-msg');

let turnO = true;
//console.log(boxes)
/*boxes[0].addEventListener('click',()=>{
    boxes[0].textContent='X'
    console.log('box1')
})*/
const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((button)=>{
    button.addEventListener('click',()=>{
        if (turnO){
            button.textContent='O';
            winner();
            turnO=false;
        }else{
            button.textContent='X';
            winner();
            turnO=true;
        }  
        button.disabled=true;
    })
})


const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const winner=()=>{
    for ( let pat of winningPatterns){
        let el1=boxes[pat[0]];
        let el2=boxes[pat[1]];
        let el3=boxes[pat[2]];
        if(el1.innerText!='' && el2.innerText!=''&& el3.innerText!=''){
            if(el1.innerText===el2.innerText && el2.innerText===el3.innerText){
                if (turnO===true){
                    let msg=document.querySelector("#msg");
                    msg.innerText="Player O wins";
                    win.style.display='block';
                    disableBoxes();
                }else{
                    let msg=document.querySelector("#msg");
                    msg.innerText="Player X wins";
                    win.style.display='block';
                    disableBoxes();
                }
            }
        }
        }
    }

const enableButtons=()=>{
    for(let button of boxes){
        button.disabled=false;
        button.innerText="";
    }
}

const resetGame=()=>{
    turnO=true;
    win.style.display='none'
}

let newGame=document.querySelector('#newgame');
newGame.addEventListener('click',()=>{
    resetGame();
    enableButtons();
})

let reGame=document.querySelector('#reset-btn');
reGame.addEventListener('click',()=>{
    resetGame();
    enableButtons();
})

