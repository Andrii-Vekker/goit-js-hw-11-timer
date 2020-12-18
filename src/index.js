import './styles.css';







// const daysRef = document.querySelector('[data-value= "days"]');
// const hoursRef = document.querySelector('[data-value= "hours"]');
// const minutesRef = document.querySelector('[data-value= "mins"]');
// const secondsRef = document.querySelector('[data-value= "secs"]');
// const timerRef = document.querySelector('#timer-1');

// const refs = {
//     daysRef:document.querySelector('[data-value= "days"]'),
//     hoursRef:document.querySelector('[data-value= "hours"]'),
//     minutesRef:document.querySelector('[data-value= "mins"]'),
//     secondsRef:document.querySelector('[data-value= "secs"]'),
//     timerRef:document.querySelector('#timer-1'),
// }

    

// const timer = {
//     intervalId:null,
//     start() {
//        const targetDate =  new Date('Jul 17, 2021')
//         this.intervalId = setInterval(() => {
            
//             //console.log(targetDate)
//             const currentTime = Date.now();
//             //console.log(currentTime);
//             const time = targetDate - currentTime ;
//             updateClockFace(time);
//             if (
//         refs.daysRef.textContent === "000" &&
//         refs.hoursRef.textContent === "00" &&
//         refs.minutesRef.textContent === "00" &&
//         refs.secondsRef.textContent === "00"
//       ) {
//         clearInterval(this.intervalId);
//       }
//         }, 1000)
//     },
// }
// timer.start();


// function updateClockFace(time) {
//  const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//  const hours = pad(Math.floor((time / (1000*60*60)) % 24));
//  const mins = pad(Math.floor((time /1000/60) % 60));
//  const secs = pad(Math.floor(time /1000 % 60));
//     console.log(`${days}:${hours}:${mins}:${secs}`);
//     refs.daysRef.textContent = `${days}`
//     refs.hoursRef.textContent = `${hours}`
//     refs.minutesRef.textContent = `${mins}`
//     refs.secondsRef.textContent = `${secs}`
// };

// function pad(value) {
//     return String(value).padStart(2, '0');
// };
// function padDays(value) {
//     return String(value).padStart(3, '0');
// };





//========================Class=======================//

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.days = document.querySelector(
      `${this.selector} span[data-value="days"]`
    );
    this.hours = document.querySelector(
      `${this.selector} span[data-value="hours"]`
    );
    this.mins = document.querySelector(
      `${this.selector} span[data-value="mins"]`
    );
    this.secs = document.querySelector(
      `${this.selector} span[data-value="secs"]`
    );
  }

  updateClockFace(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(3, "0");

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");

    const secs = Math.floor((time % (1000 * 60)) / 1000)
      .toString()
          .padStart(2, "0");
      
        if (
        this.days.textContent === "000" &&
       this.hours.textContent === "00" &&
        this.mins.textContent === "00" &&
        this.secs.textContent === "00"
        ) {
             clearInterval(this.intervalId);
      }

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  interval() {
    setInterval(() => {
      const delta = this.targetDate - Date.now();
      this.updateClockFace(delta);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

timer.interval();


