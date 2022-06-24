import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const date = document.querySelector('#datetime-picker');
const button = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

console.log(hour.style);
let timer = 0
let interval = 0;

button.disabled = true
flatpickr(date, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        //   console.log(selectedDates[0]);
        if (selectedDates[0] <= Date.now()) {
            alert("Please choose a date in the future")
            button.disabled = true
        } else {
            button.disabled = false
        }
    },
})
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

button.addEventListener('click', OnClick)
function OnClick(){
    timerDiv.style.color = 'red'
    button.disabled = true
    timer = setInterval(() => {
        const choseDate = new Date(date.value)
        const finish = choseDate - Date.now()
        let { days, hours, minutes, seconds } = convertMs(finish);

        day.textContent = days < 10 ? '0' + days : days;
        hour.textContent = hours < 10 ? '0' + hours : hours;
        minute.textContent = minutes < 10 ? '0' + minutes : minutes;
        second.textContent = seconds < 10 ? '0' + seconds : seconds;
    
        if (finish < 1000) {
          clearInterval(timer);
        }

        if (finish===0) {
            button.disabled = false
            
        }
    }, 1000)
    

}

const timerDiv = document.querySelector('.timer'); 
const field = document.querySelectorAll('.field'); 
console.log(field);


console.log(timerDiv.style);

timerDiv.style.color = 'green'
timerDiv.style.display= 'flex'
timerDiv.style.gap = '30px'
timerDiv.style.margin = '30px 0 0 0'











