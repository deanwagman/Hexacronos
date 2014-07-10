/* hexacronos.js */

(function () {
    var body = document.body,
        p = document.getElementsByTagName('p')[0];

    // Set Function to be ran every second
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

        // Get each increment fromt the current time
        hours = validate(time.getHours());
        minutes = validate(time.getMinutes());
        seconds = validate(time.getSeconds());

        // Set up and assign attach to background node
        hexcode = "#" + hours + minutes + seconds;
        body.style.background = hexcode;

        // Inject time String
        p.innerHTML = hours + " " + minutes + " " + seconds;
    }

    // First Run
    tic();

    // Subsequent Runs
    setInterval(function () {
        tic();
    }, 1000);
})();