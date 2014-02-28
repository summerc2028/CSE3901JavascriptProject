// Initialize Vars
var prevOp; // operand 1
var opCount = 0; // consecutive operands
var calc; // calc form in DOM
var display; // calc display in DOM
var mem = 0; // value in memory
var type = { // enum for function types
	DIGIT: 0,
	OP: 1,
	EVAL: 2
};
var lastButton = type.DIGIT; // type of last function used
var op = { // enum for last operation
	NONE: 0,
	ADD: 1,
	SUB: 2,
	MULT: 3,
	DIV: 4
};
var opCode = op.NONE; // last operation used

// Assign variables and handlers
function start() {
	calc = document.getElementById("calc");
	display = document.getElementById("display");
	initializeCells();
}

// Assign event handlers
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

	display.addEventListener("change", checkDec, false);

}

// Concatenate digit to current value
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

// Register add function
function add() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.ADD;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

// Register subtract function
function subtract() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.SUB;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

// Register multiply function
function mult() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.MULT;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

// Register divide function
function divide() {
	if (opCount >= 1) eval(prevOp, display.value);
	prevOp = display.value;
	opCode = op.DIV;
	lastButton = type.OP;
	calc.bdec.disabled = false;
	disableOps();
	opCount++;
}

// Disable operation buttons
function disableOps() {
	calc.badd.disabled = true;
	calc.bsub.disabled = true;
	calc.bmult.disabled = true;
	calc.bdiv.disabled = true;
	calc.bequals.disabled = true;
}

// Enable operations buttons
function enableOps() {
	calc.badd.disabled = false;
	calc.bsub.disabled = false;
	calc.bmult.disabled = false;
	calc.bdiv.disabled = false;
	calc.bequals.disabled = false;
}

// Enable/Disable decimal button
function checkDec() {
	if (display.value.contains('.')) {
		calc.bdec.disabled = true;
	} else {
		calc.bdec.disabled = false;
	}
}

// Evaluate registered function
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
}

// Clear display
function clear() {
	display.value = 0;
	calc.bdec.disabled = false;
	enableOps();
	opCode = op.NONE;
	lastButton = type.OP;
}

// Memory Functions

// Clear memory
function memclear() {
	mem = 0;
}

// Assign current value to memory
function memassign() {
	mem = display.value;
	lastButton = type.OP;
}

// Place value in memory on display
function memrecall() {
	display.value = mem;
	lastButton = type.OP;
}

// Add current value to value  stored in memory
function memadd() {
	mem = parseFloat(display.value) + parseFloat(mem);
	lastButton = type.OP;
}