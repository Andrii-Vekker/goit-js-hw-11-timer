import './styles.css';

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });





// const daysRef = document.querySelector('[data-value= "days"]');
// const hoursRef = document.querySelector('[data-value= "hours"]');
// const minutesRef = document.querySelector('[data-value= "mins"]');
// const secondsRef = document.querySelector('[data-value= "secs"]');
// const timerRef = document.querySelector('#timer-1');

const refs = {
    daysRef:document.querySelector('[data-value= "days"]'),
    hoursRef:document.querySelector('[data-value= "hours"]'),
    minutesRef:document.querySelector('[data-value= "mins"]'),
    secondsRef:document.querySelector('[data-value= "secs"]'),
    timerRef:document.querySelector('#timer-1'),
}

    

const timer = {
    intervalId:null,
    start() {
       const targetDate =  new Date('Jul 17, 2021')
        this.intervalId = setInterval(() => {
            
            //console.log(targetDate)
            const currentTime = Date.now();
            //console.log(currentTime);
            const time = targetDate - currentTime ;
            updateClockFace(time);
            if (
        refs.daysRef.textContent === "000" &&
        refs.hoursRef.textContent === "00" &&
        refs.minutesRef.textContent === "00" &&
        refs.secondsRef.textContent === "00"
      ) {
        clearInterval(this.intervalId);
      }
        }, 1000)
    },
}
timer.start();


function updateClockFace(time) {
 const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
 const hours = pad(Math.floor((time / (1000*60*60)) % 24));
 const mins = pad(Math.floor((time /1000/60) % 60));
 const secs = pad(Math.floor(time /1000 % 60));
    console.log(`${days}:${hours}:${mins}:${secs}`);
    refs.daysRef.textContent = `${days}`
    refs.hoursRef.textContent = `${hours}`
    refs.minutesRef.textContent = `${mins}`
    refs.secondsRef.textContent = `${secs}`
};

function pad(value) {
    return String(value).padStart(2, '0');
};
function padDays(value) {
    return String(value).padStart(3, '0');
};


