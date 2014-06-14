/* hexacronos.js */

var body = $('body'),
	p = $('p');


function tic(){
	var time = new Date(), 

		validate, hours, minutes, seconds, hexcode;

	/* Prevents Date methods from returning single digits */
	validate = function(num){
		if(num > 9){
			return "" + num;
		} else {
			return "0" + num;
		}
	};

	hours = validate(time.getHours());
	minutes = validate(time.getMinutes());
	seconds = validate(time.getSeconds());

	hexcode = "#" + hours + minutes + seconds;
	body.css('background', hexcode);
	p.text(hours + " " + minutes + " " + seconds);
}

tic();
setInterval(function(){tic();},1000);
