let boxes= document.querySelectorAll('.box');
// All possible win patters
let winner = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6],
];

let turn0= true;
let win = document.querySelector('.win');
let resetButton=document.querySelector('.reset-game');
let newGame=document.querySelector('.new-game');
let count =0;

// this the main function 
boxes.forEach((box)=>{
    box.addEventListener('click', () =>{

        if(turn0===true){
            box.innerText='0';
            box.style.color='red';
            turn0=false;
            box.disabbled= true;

        }
        else{
            box.innerText='X';
            turn0=true;
            box.style.color='green';
            box.disabbled= true;

        }

        
        box.disabled=true;
        count=count+1;
        checkWinner();
        gameTie(count)
        
})

});

// a function  to check winner
const checkWinner=() => {
    for(let pattern of winner){
      let pos1= boxes[pattern[0]].innerText;
      let pos2= boxes[pattern[1]].innerText;
      let pos3= boxes[pattern[2]].innerText;
    
        if(pos1!='' && pos2!= '' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                winnigMsg(pos1);
                disabled();
            }

        }
       
    }

}

// a function to disabled all game box
const disabled=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;

    })
}

// a function to enabled all game box
const enabled=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;

    })
}

// a function to show winning msg
const winnigMsg=(player)=>{
    document.querySelector('.winner').innerText=`Congrats winner ${player}`;
    win.hidden=false;


}

//a function to restart the game
const resetGame=()=>{
    win.hidden=true;
    turn0=true;
    boxes.forEach((box)=>{
        box.innerText='';

    })

}

resetButton.addEventListener('click',()=>{
    resetGame();
    enabled();
    count=0;

})

newGame.addEventListener('click',()=>{
    resetGame();
    enabled();
    count=0;

})

// a function to show tie msg
const gameTie= (totalcount) =>{

    if(totalcount===9 && win.hidden===true){
        document.querySelector('.winner').innerText=`Game Tie`;
        win.hidden=false;

    }
}