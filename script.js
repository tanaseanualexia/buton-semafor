function setColorYellow() {
    document.getElementById("myButton").className = 'btn btn-warning';
    document.getElementById("myButton").onclick = setColorGreen;
}
function setColorGreen() {
    document.getElementById("myButton").className = 'btn btn-success';
    document.getElementById("myButton").onclick = setColorRed;
}
function setColorRed() {
    document.getElementById("myButton").className = 'btn btn-danger';
    document.getElementById("myButton").onclick = setColorYellow;
}