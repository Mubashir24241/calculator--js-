var out = document.getElementById("output");
var num = document.getElementById("number");

function display(data) {
    document.getElementById("output").value += data
}

function solve() {
    var calc = document.getElementById("output").value;
    document.getElementById("output").value = eval(calc)
}

function clr() {
    document.getElementById("output").value = "";
}