var userInput;
var AIInput;
var waitForUser;
var counter=0; 
var winDisplay;

function start() {
	userInput = new Array();
	AIInput = new Array();
	var i;
	for (i = 0; i < 9; i++) {
		userInput[i] = false;
		AIInput[i] = false;
	}
	initializeCells();
	waitForUser = true;
	winDisplay = document.getElementById("winState");
}

function initializeCells() {
	gameBoard.c0.value = '';
	gameBoard.c1.value = '';
	gameBoard.c2.value = '';
	gameBoard.c3.value = '';
	gameBoard.c4.value = '';
	gameBoard.c5.value = '';
	gameBoard.c6.value = '';
	gameBoard.c7.value = '';
	gameBoard.c8.value = '';
}

function clicked (cell) {
	if (waitForUser && cell.value == '') {
		cell.value = "O";
		userInput[Number(cell.name.charAt(1))] = true;
	}
	handleUserInput(cell);
}

function userWin() {
	winDisplay.innerHTML = "User Win!";
	waitForUser = false;
}

function AIMove(num) {
	AIInput[num] = true;
	handleAIInput(cell);
	waitForUser = true;
}

function handleUserInput (cell) {
	switch(cell.name)
	{
		case "c0":
		if ((userInput[3] && userInput[6]) || (userInput[4] && userInput[8]) || (userInput[1] && userInput[2])) {
			userWin();
			return;
		}
		break;
		case "c1":
		if ((userInput[0] && userInput[2]) || (userInput[4] && userInput[7])) {
			userWin();
			return;
		}
		break;
		case "c2":
		if ((userInput[0] && userInput[1]) || (userInput[5] && userInput[8]) || (userInput[4] && userInput[6])) {
			userWin();
			return;
		}
		break;
		case "c3":
		if ((userInput[0] && userInput[6]) || (userInput[4] && userInput[5])) {
			userWin();
			return;
		}
		break;
		case "c4":
		if ((userInput[0] && userInput[8]) || (userInput[1] && userInput[7]) || (userInput[2] && userInput[6]) || (userInput[3] && userInput[5])) {
			userWin();
			return;
		}
		break;
		case "c5":
		if ((userInput[3] && userInput[4]) || (userInput[2] && userInput[8])) {
			userWin();
			return;
		}
		break;
		case "c6":
		if ((userInput[0] && userInput[3]) || (userInput[2] && userInput[4]) || (userInput[7] && userInput[8])) {
			userWin();
			return;
		}
		break;
		case "c7":
		if ((userInput[1] && userInput[4]) || (userInput[6] && userInput[8])) {
			userWin();
			return;
		}
		break;
		case "c8":
		if ((userInput[2] && userInput[5]) || (userInput[0] && userInput[4]) || (userInput[6] && userInput[7])) {
			userWin();
			return;
		}
		break;
	}
}