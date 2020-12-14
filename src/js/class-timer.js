import { refs } from './refs'

export class Timer {
    constructor(date) {
        this.isActive = false;
        this.targetDate = date;
        this.timerId = null;
    };

   
    start() {     

        if (this.isActive) {
            return
        };

        this.isActive = true;

        this.starting();

        this.timerId =  setInterval(() => {
           
            this.starting();
                      
        }, 1000);             

    };

    starting() {

        const currentDate = Date.now();
        const delta = this.targetDate - currentDate;
        this.updateInterface(delta);
        
    }

    stop() { 
        clearInterval(this.timerId);
        this.updateInterface(0);
        this.isActive = false;
    };

    updateInterface(time) {
        const days =  this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;

        
    };

    pad(value) {
        return String(value).padStart(2, '0');
        
    };
}
