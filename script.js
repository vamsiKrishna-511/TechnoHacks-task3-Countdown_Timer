var timerElement = document.getElementById("Timer");
var timerInterval;
var timeInSeconds = 240;

function startTimer() {
    if(!timerInterval) {
        timerInterval = setInterval(updateTimer,1000);
    }
}   
function Stoptimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function Resettimer() {
    Stoptimer();
    timeInSeconds = 240;
    updateTimer()
}

function updateTimer() {
    var hours = Math.floor(timeInSeconds / 3600);
    var minutes = Math.floor((timeInSeconds%3600) / 60);
    var seconds = Math.floor(timeInSeconds%60);

    var formattedTime = formatTime(hours) + ":" + formatTime(minutes) +":" + formatTime(seconds);
    timerElement.textContent = formattedTime;

    if(timeInSeconds <= 0) {
        Stoptimer()
        alert("Timer has finished")
    } else {
        timeInSeconds --;
    }
}

function formatTime(time) {
    return time.toString().padStart(2, "0");
}


function Restarttimer() {
    Resettimer();
    startTimer();
}