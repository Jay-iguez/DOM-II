import './less/index.less'

// Your code goes here!

const specialMessage = ["Our bus is large enough to seat 8.", "You can cancel anytime without additional costs.", "Our bus drivers are specially trained.", "Customer service is our number 1 priority.", "You decide where you'd like to go!", "Safety is utmost important.", "Children and the elderly are discounted!"]

function randomColorGen (num) {
return `rgb(${Math.floor(num * Math.random())}, ${Math.floor(num * Math.random())}, ${Math.floor(num * Math.random())})`
}

function randomMessage() {
    const randomNumber = Math.floor(7 * Math.random())
    console.log(randomNumber)
    return specialMessage[randomNumber]
}


const mainHeading = document.querySelector(".main-navigation h1")
mainHeading.style.userSelect = "none"

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
    event.preventDefault()
    alert("Hey, you can context menu anything other than my bus!")
    console.log("It worked.")
})

toyBus.addEventListener("dragover", event => {
    alert("You can't drop anything on my darn bus!")
    console.log("This works too.")
})

let scrollMessage = document.createElement("p")
scrollMessage.textContent = "Scroll here for quick facts about us!"
mainHeading.appendChild(scrollMessage)

scrollMessage.addEventListener("wheel", event => {
event.preventDefault()
scrollMessage.textContent = randomMessage()
})