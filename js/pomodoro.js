let workTimeInput = document.getElementById('workTime');
let breakTimeInput = document.getElementById('breakTime');
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');

let interval;
let time = 0;
let isWork = true;

function updateDisplay() {
    let minutes = Math.floor(time/60).toString().padStart(2,'0');
    let seconds = (time%60).toString().padStart(2,'0');
    timerDisplay.innerText = `${minutes}:${seconds}`;
}

function startTimer() {
    if(!interval){
        interval = setInterval(()=>{
            time--;
            if(time<0){
                isWork = !isWork;
                time = (isWork ? parseInt(workTimeInput.value) : parseInt(breakTimeInput.value))*60;
                new Audio('assets/audio/bell.mp3').play();
            }
            updateDisplay();
        },1000);
    }
}

function pauseTimer(){
    clearInterval(interval);
    interval = null;
}

function resetTimer(){
    pauseTimer();
    isWork = true;
    time = parseInt(workTimeInput.value)*60;
    updateDisplay();
}

time = parseInt(workTimeInput.value)*60;
updateDisplay();
startBtn.addEventListener('click',startTimer);
pauseBtn.addEventListener('click',pauseTimer);
resetBtn.addEventListener('click',resetTimer);
