let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let isstarted=false;
let level=0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(isstarted==false){
        console.log("game is started");
        isstarted=true;
        levelup();
    }

});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[]; 
    level++;
    h2.innerText=`Level ${level}`;
    
    let randomInd=Math.floor(Math.random()*3);
    let randomColor=btns[randomInd];
    let randombtn=document.querySelector(`.${randomColor}`);
    // console.log(randomInd);
    // console.log(randomColor);
    // console.log(randombtn);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    gameFlash(randombtn);
    
}

function checkAns(idx){
  //  console.log("curr level:",level); 
 // let idx=level-1;
  if(userSeq[idx]==gameSeq[idx]){
   // console.log("same value");
   if(userSeq.length==gameSeq.length){
    setTimeout(levelup,1000);
    //levelup();
   }
    
  }else{
    h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  } 

}

function btnpress(){
   // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor); 

    checkAns(userSeq.length-1);

}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    isstarted=false;
    userSeq=[];
    gameSeq=[];
    level=0;


}
