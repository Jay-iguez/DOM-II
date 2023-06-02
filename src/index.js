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



