	var prevOp;
	var mem = 0;

	function initializeCells() {
		display.b0.addEventListener("click", function(){addDigit(0)}, false);
		display.b1.addEventListener("click", function(){addDigit(1)}, false);
		display.b2.addEventListener("click", function(){addDigit(2)}, false);
		display.b3.addEventListener("click", function(){addDigit(3)}, false);
		display.b4.addEventListener("click", function(){addDigit(4)}, false);
		display.b5.addEventListener("click", function(){addDigit(5)}, false);
		display.b6.addEventListener("click", function(){addDigit(6)}, false);
		display.b7.addEventListener("click", function(){addDigit(7)}, false);
		display.b8.addEventListener("click", function(){addDigit(8)}, false);
		display.b9.addEventListener("click", function(){addDigit(9)}, false);
	}

	function addChar(input, character) {
		if(input.value == null || input.value == "0"){
			input.value = character
		}
		else{
			input.value += character
		}
	}

	// Memory Functions
	function memadd (x) {
		mem = parseInt (x.form.display.value) + parseInt (mem);
	}

	function memcall (x) {
		x.form.display.value = mem;
	}
	
	function memclear (x) {
		mem = 0;
	}

	function memassign (x) {
		mem = x.form.display.value;
	}

	// function checkNum(str)  {
	// 	for (var i = 0; i < str.length; i++) {
	// 		var y = str.substring(i, i+1);
	// 		if (y < "0" || y > "9") {
	// 			if (y != "/" && y != "*" && y != "+" && y !="-" && y != ".") {
	// 				alert("not a valid input.")
	// 				return false;
	// 			}
	// 		}
	// 	}
	// 	return true;
	// }