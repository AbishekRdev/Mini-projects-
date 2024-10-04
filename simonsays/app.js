





let gamesq=[];
let playsq=[];
let colors=["blue","red","yellow","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let score=[];







document.addEventListener("keypress",function(){


    if(started==false){
        console.log("game started");
        started=true; 
        levelUp();


    }  
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){

        btn.classList.remove("gameflash");

        

    },250);

    
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){

        btn.classList.remove("userflash");

        

    },250);

    
}


function levelUp(){
    playsq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randomIdx=Math.floor(Math.random()*4);
    let randomcolor=colors[randomIdx];
    let randbtn=document.querySelector(`.${randomcolor}`);
   
    gameFlash(randbtn);
    gamesq.push(randomcolor);
    textrainbow()

    
    
 

}
function checkAns(idx){
  
   if(gamesq[idx]===playsq[idx]){
      
      if(gamesq.length==playsq.length){
        setTimeout(levelUp,1000);
      }
   }else{


    score.push(level-1); 
    let maxscore=score.reduce((max,el)=>{
            if(max<el){
                return el;   
            }else{
                return max;
            }
        });
     
    
    
    
    
           
   
    h2.innerHTML=`Game over ! your score is <b>${level-1}</b><br>Heighest score  <b>${maxscore}</b> <br>press any key to restart`;
    document.querySelector("body").style.backgroundColor="red"
    setTimeout(function(){

        document.querySelector("body").style.backgroundColor="white"


    },150)
 
  
    reset();

   };

    




}

function buttonPress(){
    
  
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");

    playsq.push(userColor);
    checkAns(playsq.length-1);
    console.log(gamesq);





}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){

    btn.addEventListener("click",buttonPress);
    



}

function reset(){
      started=false;
      gamesq=[];
      playsq=[];
      level=0;


}
function textrainbow(){
    


    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let rbg=(`rgb(${r},${g},${b})`)
    let colorchange=document.querySelector(".rainbow");
    colorchange.style.color=rbg


    

    


}


























