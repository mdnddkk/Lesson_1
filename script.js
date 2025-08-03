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
    RedBtn.style.backgroundColor = "red"
    RedBtn.style.color = "white"
    YellowBtn.style.backgroundColor = "black"
    YellowBtn.style.color = "yellow"
    GreenBtn.style.backgroundColor = "black"
    GreenBtn.style.color = "green"
}       
RedBtn.addEventListener("click", turnOnRed)

function turnOnYellow () {
    leftCircleSpan.style.backgroundColor = "yellow"
    YellowBtn.style.backgroundColor = "Yellow"
    YellowBtn.style.color = "white"
    RedBtn.style.backgroundColor = "black"
    RedBtn.style.color = "red"
    GreenBtn.style.backgroundColor = "black"
    GreenBtn.style.color = "green"
}       
YellowBtn.addEventListener("click", turnOnYellow)

function turnOnGreen () {
    leftCircleSpan.style.backgroundColor = "green"
    GreenBtn.style.backgroundColor = "green"
    GreenBtn.style.color = "white"
    RedBtn.style.backgroundColor = "black"
    RedBtn.style.color = "red"
    YellowBtn.style.backgroundColor = "black"
    YellowBtn.style.color = "yellow"
}       
GreenBtn.addEventListener("click", turnOnGreen)

function turnOnMagenta () {
    rightCircleSpan.style.backgroundColor = "magenta"
    MagentaBtn.style.backgroundColor = "magenta"
    MagentaBtn.style.color = "white"
    BlueBtn.style.backgroundColor = "black"
    BlueBtn.style.color = "blue"
    CyanBtn.style.backgroundColor = "black"
    CyanBtn.style.color = "cyan"
}
MagentaBtn.addEventListener("click", turnOnMagenta)

function turnOnBlue () {
    rightCircleSpan.style.backgroundColor = "blue"
    BlueBtn.style.backgroundColor = "blue"
    BlueBtn.style.color = "white"
    MagentaBtn.style.backgroundColor = "black"
    MagentaBtn.style.color = "magenta"
    CyanBtn.style.backgroundColor = "black"
    CyanBtn.style.color = "cyan"
}
BlueBtn.addEventListener("click", turnOnBlue)

function turnOnCyan () {
    rightCircleSpan.style.backgroundColor = "cyan"
    CyanBtn.style.backgroundColor = "cyan"
    CyanBtn.style.color = "white"
    MagentaBtn.style.backgroundColor = "black"
    MagentaBtn.style.color = "magenta"
    BlueBtn.style.backgroundColor = "black"
    BlueBtn.style.color = "blue"
}
CyanBtn.addEventListener("click", turnOnCyan)
