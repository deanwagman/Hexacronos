/* hexacronos.js */

var body = document.body,
    p = document.getElementsByTagName('p')[0];


function tic() {
    var time = new Date(),
        validate,
        hours,
        minutes,
        seconds,
        hexcode;

    /* Prevents Date methods from returning single digits */
    validate = function (num) {
        if (num > 9) {
            return num.toString();
        }
        return "0" + num;
    };

    hours = validate(time.getHours());
    minutes = validate(time.getMinutes());
    seconds = validate(time.getSeconds());

    hexcode = "#" + hours + minutes + seconds;
    body.style.background = hexcode;
    p.innerHTML = hours + " " + minutes + " " + seconds;
}

tic();
setInterval(function () {
    tic();
}, 1000);
