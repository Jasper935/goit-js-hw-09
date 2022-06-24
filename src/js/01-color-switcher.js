const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
btnStop.addEventListener('click', onClickStop)
btnStart.addEventListener('click', onClickStart)
let interval = null
btnStop.disabled = true
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart() {
    body.style.backgroundColor = getRandomHexColor()
    interval = setInterval(() => body.style.backgroundColor = getRandomHexColor(), 1000)
    btnStart.disabled = true
    btnStop.disabled = false

}

function onClickStop() {
 clearInterval(interval) 
 btnStart.disabled = false
 btnStop.disabled = true
}

