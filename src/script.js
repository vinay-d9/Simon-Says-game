let gameseq=[];
let userseq=[];
let btns=["yellow","purple","red","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

function btnflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randinx =Math.floor(Math.random()*3);
    let randcolor = btns[randinx];

    let randbtn =document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);


}



document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started");
        started=true;

        levelup();
    }


});

function check(ind){
    
    if(userseq[ind] == gameseq[ind]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`GAME OVER! Your score was <b>${level} </b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },200);
        reset();
    }
}

function btnpress(){
    let btn = this;
    btnflash(btn);
    
    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);
    check(userseq.length-1);



};

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}

