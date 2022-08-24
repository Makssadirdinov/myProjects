const scalesBtn = document.querySelector(".scales__btn")
const links = document.querySelector(".links")
const blackBtn = document.querySelector(".black__btn")
const whiteBtn = document.querySelector(".white__btn")
const body = document.querySelector("body")

scalesBtn.addEventListener("click", () => {
    let sum = +prompt("Введите стоимось товара за кг", "")
    let scales = +prompt("Введите килограмм товара", "")
    alert(sum * scales)
   
})


//theme------
blackBtn.addEventListener("click", () => {
    body.style.background = "#000"
    links.style.color = "#fff"
    scalesBtn.style.color = "#000"
    scalesBtn.style.background = "#fff"
    whiteBtn.style.background = "#fff"
    whiteBtn.style.color = "#000"
    blackBtn.style.background = "#fff"
    blackBtn.style.color = "#000"
})
whiteBtn.addEventListener("click", () => {
    body.style.background = "#fff"
    links.style.color = "#000"
    scalesBtn.style.color = "#fff"
    scalesBtn.style.background = "#000"
    whiteBtn.style.background = "#000"
    whiteBtn.style.color = "#fff"
    blackBtn.style.background = "#000"
    blackBtn.style.color = "#fff"
})