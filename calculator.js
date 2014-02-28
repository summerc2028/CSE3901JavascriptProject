var prevOp;
var calc = 0;
var mem = 0;
var opCode = {
	NONE: 0,
	ADD: 1,
	SUB: 2,
	MULT: 3,
	DIV: 4
};

function start() {
	calc = document.getElementById("calc");
	initializeCells();
}

function initializeCells() {
	calc.b0.addEventListener("click", function(){addDigit(0)}, false);
	calc.b1.addEventListener("click", function(){addDigit(1)}, false);
	calc.b2.addEventListener("click", function(){addDigit(2)}, false);
	calc.b3.addEventListener("click", function(){addDigit(3)}, false);
	calc.b4.addEventListener("click", function(){addDigit(4)}, false);
	calc.b5.addEventListener("click", function(){addDigit(5)}, false);
	calc.b6.addEventListener("click", function(){addDigit(6)}, false);
	calc.b7.addEventListener("click", function(){addDigit(7)}, false);
	calc.b8.addEventListener("click", function(){addDigit(8)}, false);
	calc.b9.addEventListener("click", function(){addDigit(9)}, false);

	calc.bplus.addEventListener("click", add, false);
	calc.bsub.addEventListener("click", subtract, false);
	calc.bmult.addEventListener("click", mult, false);
	calc.bdiv.addEventListener("click", divide, false);

	calc.bequals.addEventListener("click", function(){eval(prevOp, input.value)}, false)

}

function addDigit(input) {
	if(input.value == null || input.value == "0") {
		input.value = input;
	}
	else {
		input.value += input;
	}
	console.log("input.value = " + input.value);
}

function add() {
	prevOp = input.value;
	input.value = 0;
	opCode = ADD;
}

function subtract() {
	prevOp = input.value;
	input.value = 0;
	opCode = SUB;
}

function mult() {
	prevOp = input.value;
	input.value = 0;
	opCode = MULT;
}

function divide() {
	prevOp = input.value;
	input.value = 0;
	opCode = DIV;
}

function eval(op1, op2) {
	switch(opCode) {
		case opCode.ADD: {
			return op1 + op2;
			break;
		}
		case opCode.SUB: {
			return op1 - op2;
			break;
		}
		case opCode.MULT: {
			return op1 * op2;
			break;
		}
		case opCode.DIV: {
			return op1 / op2;
			break;
		}
		default: {
			return "ERROR";
		}
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

	start();