import { Timer } from './class-timer'
import { refs } from './refs'


const date = new Date(2021, 0, 0);

const ourTimer = new Timer(date);


refs.startBtn.addEventListener('click', onTimer)
refs.stopBtn.addEventListener('click', offTimer)
 

function onTimer() {
    ourTimer.start()
};

function offTimer() {
    ourTimer.stop()
};