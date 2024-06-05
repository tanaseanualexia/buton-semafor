let indexColor = 0;

const colors = [
    { className: 'btn btn-danger'},
    { className: 'btn btn-warning'},
    { className: 'btn btn-success'}
];

function changeColor() {
    indexColor = (indexColor + 1) % colors.length;
    const color = colors[indexColor];
    const btn = document.getElementById("myButton");
    btn.className = color.className;
    button.textContent = "Change color";
    btn.textContent = color.className.split(' ')[2]; 
}

function autoChangeColor() {
    setInterval(changeColor, 10000);
}

window.onload = autoChangeColor;