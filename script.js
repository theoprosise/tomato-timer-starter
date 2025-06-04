function updateTimeDisplay(minutes,seconds){
    let minutesClean = minutes.toString().padStart(2, '0');
    let secondsClean = seconds.toString().padStart(2,'0');
    let time = document.getElementById("time-left");
    time.textContent = (minutesClean + ":" + secondsClean);
}

function startTimer(duration){
    minutes = Math.floor(duration / 60);
    seconds = duration % 60
    updateTimeDisplay(minutes,seconds)
    let testVar = setInterval(() => {
        if(seconds >0){
            seconds--;
        }
        else{
            if(minutes >0){
            minutes--;
            }
            else{
                
            }
            seconds = 59;
        }
        updateTimeDisplay(minutes,seconds);
    }, 1000)
    
    setTimeout(() => {
        clearInterval(testVar);
    }, duration * 1000)

}
document.getElementById('study-btn').addEventListener('click',startStudySession);
document.getElementById('break-btn').addEventListener('click',startBreakSession);


function startStudySession(){
    startTimer(1500);
    let studySessions = document.getElementById("study-count");
    studySessions.textContent = parseInt(studySessions.textContent, 10) + 1;
}

function startBreakSession(){
    startTimer(300);
    let breakSessions = document.getElementById("break-count");
    breakSessions.textContent = parseInt(breakSessions.textContent, 10) + 1;
}
