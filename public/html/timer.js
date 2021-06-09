let timerEle=document.querySelector(".timer");
let callOwnerBtn=document.querySelector(".call-owner");
let emergencyBtn=document.querySelector(".emergency");

console.log("In timer.js");

window.addEventListener('load',startCounting);
emergencyBtn.addEventListener("click",function(){
    callOwnerBtn.classList.add("btn-active");
    stopCounting();
})

function startCounting(){
    // timerEle.classList.add("timing-active");
    
    let timer=1;
    clearObj=setInterval(function(){
        let seconds=(timer%60)<10?`0${timer%60}`:timer%60;
        let minutes=(timer/60)<10?`0${Number.parseInt(timer/60)}`:Number.parseInt(timer/60);
        let hours=(timer/3600)<10?`0${Number.parseInt(timer/3600)}`:Number.parseInt(timer/3600);
        timerEle.innerText=`${hours}:${minutes}:${seconds}`;
        if(timer==10){
            callOwnerBtn.classList.add("btn-active");
            stopCounting();
            // return;
        }
        timer++;
    },1000);
}

function stopCounting(){
    timerEle.classList.remove("timer");
    timerEle.innerText="00:00:00";
    clearInterval(clearObj);

}