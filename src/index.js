import './less/index.less'

// Your code goes here!
function randomColorGen (num) {
return `rgb(${Math.floor(num * Math.random())}, ${Math.floor(num * Math.random())}, ${Math.floor(num * Math.random())})`
}




const mainHeading = document.querySelector(".main-navigation h1")

mainHeading.addEventListener("click", event => {
    mainHeading.style.color = randomColorGen(255)
})

const copyThanks = document.createElement("p")
mainHeading.appendChild(copyThanks)

const allElements = document.querySelector("*")

allElements.addEventListener("copy", event => {
copyThanks.textContent = `Thanks for copying a ${event.target.tagName} element.`
console.log('blue cheese')
})

allElements.addEventListener("dragstart", event => {
    document.body.style.backgroundColor = randomColorGen(255)
})

allElements.addEventListener("dragend", event => {
    document.body.style.backgroundColor = "#FFFFFF"
})

const toyBus = document.querySelector(".intro img")

toyBus.addEventListener("contextmenu", event => {
    alert("Hey, you can context menu anything other than my bus!")
})

