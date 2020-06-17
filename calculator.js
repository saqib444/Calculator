
function numbers(operandsValue) {
    document.getElementById("result").value += operandsValue;
}

function calculate() {
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}









