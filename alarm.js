// TIMER
//BTNS
var minutesPluss = document.getElementById("minutesTimerPluss");
var minutesMinus = document.getElementById("minutesTimerMinus");

var secondsPluss = document.getElementById("secondsTimerpluss");
var secondsMinus = document.getElementById("secondsTimerMinus");
var timerStart = document.getElementById("timerStart");
var timerStop = document.getElementById("timerStop");

//TIME
var minutesTimer = document.getElementById("minutesTimer"); 
var secondsTimer = document.getElementById("secondsTimer"); 
var timerCountDown ="";

//ADD/SUBTRACT TIME
var userMinutesTimer = 0;
var userSecondsTimer = 0;
minutesPluss.addEventListener("click", timerMinutesPluss);
minutesMinus.addEventListener("click", timerMinutesMinus);
secondsPluss.addEventListener("click", timerSecondsPluss);
secondsMinus.addEventListener("click", timerSecondsMinus);
timerStart.addEventListener("click", startTimer);
timerStop.addEventListener("click", stopTimer);

//MINUTES
function timerMinutesPluss(){
    userMinutesTimer++;
    
    if(userMinutesTimer < 10){
        minutesTimer.innerHTML = "0" + userMinutesTimer;
    }
    else if(userMinutesTimer === 61){
        userMinutesTimer = 0;
        minutesTimer.innerHTML = "0" + userMinutesTimer;
    }
    else{
        minutesTimer.innerHTML = userMinutesTimer;
    }
}

function timerMinutesMinus(){
    userMinutesTimer--;
    secondsTimer.innerHTML = "59";
    if(userMinutesTimer === -1){
        userMinutesTimer = 60;
        minutesTimer.innerHTML = userMinutesTimer;
    }
    else if(userMinutesTimer < 10){
        minutesTimer.innerHTML = "0" + userMinutesTimer;
    }
    else{
        minutesTimer.innerHTML = userMinutesTimer;
    }
    
}


//SECONDS
function timerSecondsPluss(){
    userSecondsTimer++;
    
    if(userSecondsTimer < 10){
        secondsTimer.innerHTML = "0" + userSecondsTimer;
    }
    else if(secondsTimer.innerHTML === "59"){
        userSecondsTimer = 0;
        secondsTimer.innerHTML = "0" + userSecondsTimer;
        timerMinutesPluss();
    }
    else{
        secondsTimer.innerHTML = userSecondsTimer;
    }
}

function timerSecondsMinus(){
    userSecondsTimer--;
    
    if(userSecondsTimer === -1){
        userSecondsTimer = 30;
        secondsTimer.innerHTML = userSecondsTimer;
    }
    else if(userSecondsTimer < 10){
        secondsTimer.innerHTML = "0" + userSecondsTimer;
    }
    else{
        secondsTimer.innerHTML = userSecondsTimer;
    }
    
}

function startTimer(){
    if(timerStart.innerHTML === "Start"){
        timerStart.innerHTML = "Pause";
        timerCountDownM = setInterval(timerM, 1000);
        timerCountDownS = setInterval(timerS, 1000);
        console.log("started");
    }
    else if(timerStart.innerHTML === "Pause"){
        timerStart.innerHTML = "Start";
        clearInterval(timerCountDownM);
        clearInterval(timerCountDownS);
        console.log("pause");
    }
}

function stopTimer(){
    clearInterval(timerCountDownM);
    clearInterval(timerCountDownS);
    timerStart.innerHTML = "Start";
    
    //reset value
    userMinutesTimer = 0;
    userSecondsTimer = 0;
    minutesTimer.innerHTML = "0" + userMinutesTimer;
    secondsTimer.innerHTML = "0" + userSecondsTimer;
    console.log("stoped")
    
    
}
var minutes = parseInt(minutesTimer.innerHTML);
function timerM(){
    timerMinutesMinus();
    console.log("Minutes: " + minutes);
    minutes--;
    if(seconds === -1 && minutes >=1){
        minutesTimer.innerHTML = minutes - 1;
        secondsTimer.innerHTML = "30";
    }
    
}

var seconds = parseInt(secondsTimer.innerHTML);
function timerS(){
    timerSecondsMinus();
    console.log("seconds"+seconds);
    seconds--;
    
    
    if(seconds === -1 && minutes === 0){
        stopTimer();
    }
}





