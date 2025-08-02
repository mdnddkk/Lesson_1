const leftCircleSpan = document.getElementById("leftCircle")
const rightCircleSpan = document.getElementById("rightCircle")

const RedBtn = document.getElementById("Red")
const YellowBtn = document.getElementById("Yellow")
const GreenBtn = document.getElementById("Green")
const MagentaBtn = document.getElementById("Magenta")
const BlueBtn = document.getElementById("Blue")
const CyanBtn = document.getElementById("Cyan")

function turnOnRed () {
    leftCircleSpan.style.backgroundColor = "red"
}       
RedBtn.addEventListener("click", turnOnRed)

function turnOnYellow () {
    leftCircleSpan.style.backgroundColor = "yellow"
}       
YellowBtn.addEventListener("click", turnOnYellow)

function turnOnGreen () {
    leftCircleSpan.style.backgroundColor = "green"
}       
GreenBtn.addEventListener("click", turnOnGreen)

function turnOnMagenta () {
    rightCircleSpan.style.backgroundColor = "magenta"
}
MagentaBtn.addEventListener("click", turnOnMagenta)

function turnOnBlue () {
    rightCircleSpan.style.backgroundColor = "blue"
}
BlueBtn.addEventListener("click", turnOnBlue)

function turnOnCyan () {
    rightCircleSpan.style.backgroundColor = "cyan"
}
CyanBtn.addEventListener("click", turnOnCyan)
