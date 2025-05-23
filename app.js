const startButton = document.getElementById('circle').querySelector('button');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let myInterval;
let theBell = new Audio("youtube_t7bxsTm4IyM_audio.mp3")

let state = true;


const apptimer = () => {
    const sessionAmount = Number(minutes.innerText);
    if (state){
        state = false;
        let totalSeconds = Number(minutes.innerText)*60;
        const updateTimer = () => {
                totalSeconds--;
                
                if((totalSeconds%60) < 10){
                    seconds.innerText = "0"+String(totalSeconds%60);

                } 
                else{
                    seconds.innerText = String(totalSeconds%60);
                    
                } 
                minutes.innerText = String(Math.floor(totalSeconds/60));
                if(Math.floor(totalSeconds/60) === 0 && totalSeconds%60 === 0){
                    clearInterval(myInterval);
                    theBell.play()
                }  

            } 

        myInterval = setInterval(updateTimer, 1000);
    } else {
        alert('The timer already started.')
    }
} 

startButton.addEventListener('click', apptimer);