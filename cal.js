var tpi = document.getElementById('input');
var output = document.getElementById('output');

var btns = document.getElementsByClassName('btn');

function cleared() {
    output.innerHTML = '';
    tpi.innerHTML = '';
}

function sum() {
    tpi.innerHTML += '+';
}

function sub() {
    tpi.innerHTML += '-';
}

function mul() {
    tpi.innerHTML += '*';
}

function div() {
    tpi.innerHTML += '/';
}

function zero() {
    tpi.innerHTML += 0;
}

function one() {
    tpi.innerHTML += 1;
}

function two() {
    tpi.innerHTML += 2;
}

function thr() {
    tpi.innerHTML += 3;
}

function fou() {
    tpi.innerHTML += 4;
}

function fiv() {
    tpi.innerHTML += 5;
}

function six() {
    tpi.innerHTML += 6;
}

function sev() {
    tpi.innerHTML += 7;
}

function eig() {
    tpi.innerHTML += 8;
}

function nin() {
    tpi.innerHTML += 9;
}

function dot() {
    tpi.innerHTML += '.';
}

function eql() {
    var result = eval(tpi.innerHTML)
    output.innerHTML = result;
}

// function clicked(e) {
//     var action = document.getElementById(e.target.id).innerHTML;
//     switch (action) {
//         case '0':
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//         case '.':
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//             output.innerHTML += action;
//             break;
//         case 'AC':
//             output.innerHTML = '0';
//             intput.innerHTML = '0';
//             break;
//         default:
//             output.innerHTML = 'Error';
//     }
// }

