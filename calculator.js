	var mem = 0;

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

	function addChar(input, character) {
		if(input.value == null || input.value == "0"){
			input.value = character
		}
		else{
			input.value += character
		}
	}

	function delChar(input) {
		input.value = input.value.substring(0, input.value.length - 1)
	}

	function calculate(form)  {
		form.display.value = eval(form.display.value)
	}

	function checkNum(str)  {
		for (var i = 0; i < str.length; i++) {
			var y = str.substring(i, i+1);
			if (y < "0" || y > "9") {
				if (y != "/" && y != "*" && y != "+" && y !="-" && y != ".") {
					alert("not a valid input.")
					return false;
				}
			}
		}
		return true;
	}