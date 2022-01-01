var colors = ["#e6b300", "#a89b28", "#d7743b", "#f0f1f6", "#fec4d2"];

function changeColor() {
    const chosenColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = chosenColor;
    console.log(`${colors}; chosen: ${chosenColor}`)
    if (colors.length === 1) {
        colors = ["#e6b300", "#a89b28", "#d7743b", "#f0f1f6", "#fec4d2"]
    } else {
        colors.splice(colors.indexOf(chosenColor), 1)
    }
    if (chosenColor === "#f0f1f6" || chosenColor === "#fec4d2") {
        document.body.style.color = "black";
    } else {
        document.body.style.color = "white";
    }
}