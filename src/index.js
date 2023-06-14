import './less/index.less'

// Your code goes here!

const specialBusMessage = ["Our bus is large enough to seat 8.", "You can cancel anytime without additional costs.", "Our bus drivers are specially trained.", "Customer service is our number 1 priority.", "You decide where you'd like to go!", "Safety is utmost important.", "Children and the elderly are discounted!"]

const specialWindowMessage = ["Woohoo, here we go scrolling again!", "Time to change size once more", "Multitasking is always good", "Great way to make room."]

function randomColorGen (num) {
return `rgb(${Math.floor(num * Math.random())}, ${Math.floor(num * Math.random())}, ${Math.floor(num * Math.random())})`
}

function randomMessage(type) {
    const amountElements = type.length - 1
    const randomNumber = Math.floor(amountElements * Math.random())
    return type[randomNumber]
}

let amountBold = 0
let clickCounter = 0

const headerMain = document.querySelector(".main-navigation")

const mainHeading = document.querySelector(".main-navigation h1")
mainHeading.style.userSelect = "none"

mainHeading.addEventListener("click", event => {
    mainHeading.style.color = randomColorGen(255)
})

const windowMessage = document.createElement("p")
windowMessage.className = "flavour"
windowMessage.style.backgroundColor = "white"
windowMessage.style.display = "flex"
windowMessage.style.justifyContent = "center"
headerMain.appendChild(windowMessage)

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

allElements.addEventListener("dblclick", event => {
    clickCounter += 1
if (clickCounter === 5) {
    alert("You can stop double clicking on everything, thanks.")
    clickCounter = 0
}
})

document.addEventListener("visibilitychange", event => {
    alert("Thanks for coming back, thought you never would.")
})

window.addEventListener("scroll", event => {
windowMessage.textContent = randomMessage(specialWindowMessage)
console.log(windowMessage)
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
scrollMessage.textContent = randomMessage(specialBusMessage)
})

const firstBusMessage = document.querySelector(".intro p")

const boldedMessage = document.createElement("b")
boldedMessage.textContent = " There are many features to explore on the webpage, please look around and find them all!"
boldedMessage.style.fontWeight = "bold"
firstBusMessage.appendChild(boldedMessage)

document.addEventListener("keydown", event => {
    if (event.key === "b") {
        boldedMessage.style.fontWeight = "normal"
    } else if (boldedMessage.style.fontWeight === "normal" && event.key === "B" && amountBold === 0) {
        boldedMessage.style.fontWeight = "bold"
        boldedMessage.textContent += " Hey you figured out how to bold it again, nice!"
        amountBold += 1
    } else if (boldedMessage.style.fontWeight === "normal" && event.key === "B" && amountBold === 1) {
        boldedMessage.style.fontWeight = "bold"
    }
})

console.log(document)