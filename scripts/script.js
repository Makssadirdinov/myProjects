const startBtn = document.querySelector(".timer__start")
const pauseBtn = document.querySelector(".timer__pause")
const stopBtn = document.querySelector(".timer__stop")
const timerTime = document.querySelector(".timer__time")
const blackBtn = document.querySelector(".black__btn")
const whiteBtn = document.querySelector(".white__btn")
const body = document.querySelector("body")
const links = document.querySelector(".links")

let interval
let milSec

let hh = 0
let mm = 0
let ss = 0

const timerStarter = () => {
    ss++
    if (mm === 59 && ss === 59) {
        ss = 0
        mm = 0
        hh++        
    }

    if (ss === 59) {
        ss = 0
        mm++
    }
}

startBtn.addEventListener("click", () => {   
    interval = setInterval(() => {
        timerStarter()
        show()
    }, 1000)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(interval)
})

stopBtn.addEventListener("click", () => {
    clearInterval(interval)
    ss = 0
    mm = 0
    hh = 0
    show()
})

const addZero = (num) => {
    const str = num.toString()
    if (str.length === 2) {
        return str        
    } else {
        return `0${str}`
    }
}

const show = () => {
    timerTime.innerText = `${addZero(hh)}:${addZero(mm)}:${addZero(ss)}`
}

// theme -----------------
blackBtn.addEventListener("click", () => {
    body.style.background = "#000"
    whiteBtn.style.background = "#fff"
    whiteBtn.style.color = "#000"
    blackBtn.style.background = "#fff"
    blackBtn.style.color = "#000"
    links.style.color = "#FFF"
})
whiteBtn.addEventListener("click", () => {
    body.style.background = "#fff"
    whiteBtn.style.background = "#000"
    whiteBtn.style.color = "#fff"
    blackBtn.style.background = "#000"
    blackBtn.style.color = "#fff"
    links.style.color = "#000"
})