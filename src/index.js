import './styles.css';

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });





const daysRef = document.querySelector('[data-value= "days"]');
const hoursRef = document.querySelector('[data-value= "hours"]');
const minutesRef = document.querySelector('[data-value= "mins"]');
const secondsRef = document.querySelector('[data-value= "secs"]');
const timerRef = document.querySelector('#timer-1');

    

const timer = {
    start() {
       const targetDate = new Date('Jul 17, 2019')
        setInterval(() => {
            
            //console.log(targetDate)
            const currentTime = Date.now();
            //console.log(currentTime);
            const interval = targetDate - currentTime ;
            const time = interval - targetDate ; 
            updateClockFace(time);
        }, 1000)
}
}
timer.start();


function updateClockFace(time) {
 const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
 const hours = pad(Math.floor((time / (1000*60*60)) % 24));
 const mins = pad(Math.floor((time /1000/60) % 60));
 const secs = pad(Math.floor(time /1000 % 60));
    console.log(`${days}:${hours}:${mins}:${secs}`);
};

function pad(value) {
    return String(value).padStart(2, '0');
};


