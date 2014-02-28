var prevOp;
var currentOp;
var opCount = 0;
var calc;
var display;
var mem = 0;
var type = {
	DIGIT: 0,
	OP: 1,
	EVAL: 2
};
var op = {
	NONE: 0,
	ADD: 1,
	SUB: 2,
	MULT: 3,
	DIV: 4
};
var lastButton = type.DIGIT;
var opCode = op.NONE;

function start() {
	calc = document.getElementById("calc");
	display = document.getElementById("display");
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
	calc.bdec.addEventListener("click", function(){addDigit('.')}, false);

	calc.badd.addEventListener("click", add, false);
	calc.bsub.addEventListener("click", subtract, false);
	calc.bmult.addEventListener("click", mult, false);
	calc.bdiv.addEventListener("click", divide, false);

	calc.bequals.addEventListener("click", function(){eval(prevOp, display.value)}, false)
	calc.bC.addEventListener("click", clear, false);

}

function addDigit(digit) {
	if(display.value == null || display.value == "0" || lastButton == type.OP || lastButton == type.EVAL) {
		display.value = digit;
	}
	else {
		display.value += digit;
	}
	lastButton = type.DIGIT;
	if (digit == '.') calc.bdec.disabled = true;
	enableOps();
}

function add() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.ADD;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

function subtract() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.SUB;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

function mult() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.MULT;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

function divide() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.DIV;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

function disableOps() {
	calc.badd.disabled = true;
	calc.bsub.disabled = true;
	calc.bmult.disabled = true;
	calc.bdiv.disabled = true;
	calc.bequals.disabled = true;
}

function enableOps() {
	calc.badd.disabled = false;
	calc.bsub.disabled = false;
	calc.bmult.disabled = false;
	calc.bdiv.disabled = false;
	calc.bequals.disabled = false;
}

function eval(op1, op2) {
	switch(opCode) {
		case op.ADD: {
			if (lastButton != type.EVAL) {
				prevOp = op2;
			}
			display.value = parseFloat(op1) + parseFloat(op2);
			break;
		}
		case op.SUB: {
			if (lastButton != type.EVAL) {
				prevOp = -op2;
			}
			display.value = parseFloat(op1) - parseFloat(op2);
			opCode = op.ADD;
			break;
		}
		case op.MULT: {
			if (lastButton != type.EVAL) {
				prevOp = op2;
			}
			display.value = parseFloat(op1) * parseFloat(op2);
			break;
		}
		case op.DIV: {
			if (lastButton != type.EVAL) {
				prevOp = 1/op2;
			}
			display.value = parseFloat(op1) / parseFloat(op2);
			opCode = op.MULT;
			break;
		}
		default: {
			return "ERROR";
		}
	}
	opCount = 0;
	lastButton = type.EVAL;
	calc.bdec.disabled = false;
	enableOps();
	console.log("prevOp = " + prevOp);
}

function clear() {
	display.value = 0;
	calc.bdec.disabled = false;
	lastButton = type.OP;
}

// Memory Functions
function memclear() {
	mem = 0;
}

function memassign() {
	mem = display.value;
	opCode = type.OP;
}

function memrecall(x) {
	display.value = mem;
	calc.bdec.disabled = false;
}

function memadd() {
	mem = parseFloat(display.value) + parseFloat(mem);
	calc.bdec.disabled = false;
}