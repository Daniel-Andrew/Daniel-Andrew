const bgColor = document.body;
const mySwitch = document.querySelector(".switch");
const checkBox = document.querySelector(".checkbox")
console.log(bgColor);


mySwitch.addEventListener("click", function() {
    if(checkBox.checked === true) {
        bgColor.style.backgroundColor = "#333";
    } else {
        bgColor.style.backgroundColor = "#eee";
    }
})
