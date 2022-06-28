const butt1=document.querySelector("#p1button");
const butt2=document.querySelector("#p2button");
const p1score=document.querySelector("#p1score");
const p2score=document.querySelector("#p2score");
const reset=document.querySelector("#reset");
const winscoreto=document.querySelector("#playto");

let count1=0;
let count2=0;
let winscore=3;
let gameover=false;

butt1.addEventListener('click',function(){
    if(!gameover){
        count1++;
        if(count1===winscore){
            gameover=true
            p1score.classList.add('winner');
            p2score.classList.add('loser');
            butt1.disabled=true;
            butt2.disabled=true;
        }
        console.log(count1);
        p1score.textContent=count1;

    }
})

butt2.addEventListener('click',function(){
    if(!gameover){
        count2++;
        if(count2===winscore){
            gameover=true
            p2score.classList.add('winner');
            p1score.classList.add('loser');
            butt1.disabled=true;
            butt2.disabled=true;
        }
        console.log(count2);
        p2score.textContent=count2;

    }  
})
function resetgame(){
    gameover=false;
    count1=0;
    count2=0;
    p1score.textContent=count1;
    p2score.textContent=count2;
    p1score.classList.remove('winner','loser');
    p2score.classList.remove('winner','loser');
    butt1.disabled=false;
    butt2.disabled=false;
}
reset.addEventListener('click',resetgame)

winscoreto.addEventListener('change',function(){
    winscore=parseInt(this.value);
    resetgame();
})