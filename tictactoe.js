// Initialize Variables
var	userInput = new Array();
var	AIInput = new Array();
var Painted = new Array();
var gameOver = false;
var winDisplay;
var winningComb;

function start() {
	winningComb = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

	winDisplay = document.getElementById("winState");
	initializeCells();
	gameBoard.c0.addEventListener("click", function(){clicked(gameBoard.c0)}, false);
 	gameBoard.c1.addEventListener("click", function(){clicked(gameBoard.c1)}, false);
	gameBoard.c2.addEventListener("click", function(){clicked(gameBoard.c2)}, false);
	gameBoard.c3.addEventListener("click", function(){clicked(gameBoard.c3)}, false);
	gameBoard.c4.addEventListener("click", function(){clicked(gameBoard.c4)}, false);
	gameBoard.c5.addEventListener("click", function(){clicked(gameBoard.c5)}, false);
	gameBoard.c6.addEventListener("click", function(){clicked(gameBoard.c6)}, false);
	gameBoard.c7.addEventListener("click", function(){clicked(gameBoard.c7)}, false);
	gameBoard.c8.addEventListener("click", function(){clicked(gameBoard.c8)}, false);
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
	if (cell.value == '' && !gameOver ) {
		cell.value = 'O';
		userInput.push(Number(cell.name.charAt(1)));
		checkIfUserWin();
		checkIsTie();
		if (!gameOver){
		AIMove();
		}
	}
}

function userWin() {
	winDisplay.innerHTML = "You Won!";
}
function AIWin() {
	winDisplay.innerHTML = "You lost, So Close!";
}


function checkIfUserWin() {
	for(var i = 0; i < winningComb.length; i++){
		var checkLength = 0;
		for(var j = 0; j < winningComb[i].length; j++) {
			for(var k = 0; k < userInput.length; k++){
				if (userInput[k]==winningComb[i][j]){
					checkLength++;
					if (checkLength == 3) {
						userWin();
						gameOver = true;
						break;
					}
				}
			}
		}
	}
}

function checkIfAIWin() {
	for(var i = 0; i < winningComb.length; i++){
		var checkLength = 0;
		for(var j = 0; j < winningComb[i].length; j++) {
			for(var k = 0; k < AIInput.length; k++){
				if (AIInput[k]==winningComb[i][j]){
					checkLength++;
					if (checkLength == 3) {
						AIWin();
						gameOver = true;
						break;
					}
				}
			}
		}
	}
}

function AIPaint(num){
	if (num == 0) {
		gameBoard.c0.value = 'X';
	} else 	if (num == 1) {
		gameBoard.c1.value = 'X';
	} else 	if (num==2) {
		gameBoard.c2.value = 'X';
	} else 	if (num==3) {
		gameBoard.c3.value = 'X';
	} else 	if (num==4) {
		gameBoard.c4.value = 'X';
	} else 	if (num==5) {
		gameBoard.c5.value = 'X';
	} else 	if (num==6) {
		gameBoard.c6.value = 'X';
	} else 	if (num==7) {
		gameBoard.c7.value = 'X';
	} else 	if (num==8) {
		gameBoard.c8.value = 'X';
	}
}

function checkIfPainted(num)	{
	if (num==0) {
		if (gameBoard.c0.value == '') return false;
	} else 	if (num==1) {
		if (gameBoard.c1.value == '') return false;
	} else 	if (num==2) {
		if (gameBoard.c2.value == '') return false;
	} else 	if (num==3) {
		if (gameBoard.c3.value == '') return false;
	} else 	if (num==4) {
		if (gameBoard.c4.value == '') return false;
	} else 	if (num==5) {
		if (gameBoard.c5.value == '') return false;
	} else 	if (num==6) {
		if (gameBoard.c6.value == '') return false;
	} else 	if (num==7) {
		if (gameBoard.c7.value == '') return false;
	} else 	if (num==8) {
		if (gameBoard.c8.value == '') return false;
	}
	return true;
}

function checkIsTie() {
	var i = 0;
	var isTie = true;
	while (i < 9 ){
		if (!checkIfPainted(i)){
			isTie = false;
			break;
		}
		i++;
	}
	if (isTie){
	winDisplay.innerHTML = "That's a tie!";
	}
}

function AIMove() {
	var AImoved = false;
	if (userInput.length == 1) {
		if (checkIfPainted(4)){
			AIPaint(0);
			AIInput.push(0);
			checkIfAIWin()
		} else {
			AIPaint(4);	
			AIInput.push(4);
			checkIfAIWin()
		}
	} else {
		var i = 0;
		while(i < winningComb.length && !AImoved){
			var checkLength = 0;
			var j = 0
			while(j < winningComb[i].length && !AImoved) {
				var k = 0;
				while(k < AIInput.length && !AImoved){
					if (AIInput[k]==winningComb[i][j]){
						checkLength++;
						if (checkLength == 2) {
							var l = 0;
							while (l < 3 && !AImoved){
								if (!checkIfPainted(winningComb[i][l])){
									AIPaint(winningComb[i][l]);
									AIInput.push(winningComb[i][l]);
									checkIfAIWin()
									AImoved = true;
									break;
								}
								l++;
							}
						}
					}
					k++;
				}
				j++;
			}	
			i++;
		}
		var i = 0;
		while(i < winningComb.length && !AImoved){
			var checkLength = 0;
			var j = 0
			while(j < winningComb[i].length && !AImoved) {
				var k = 0;
				while(k < userInput.length && !AImoved){
					if (userInput[k]==winningComb[i][j]){
						checkLength++;
						if (checkLength == 2) {
							var l = 0;
							while (l < 3 && !AImoved){
								if (!checkIfPainted(winningComb[i][l])){
									AIPaint(winningComb[i][l]);
									AIInput.push(winningComb[i][l]);
									checkIfAIWin()
									AImoved = true;
									break;
								}
								l++;
							}
						}
					}
					k++;
				}
				j++;
			}	
			i++;
		}

		if (!AImoved) {
			var i = 0;
			while (!AImoved && i < 9){
				if (!checkIfPainted(i)){
					AIPaint(i);
					AIInput.push(i);
					checkIfAIWin()
					AImoved = true;
					break;
				}
				i++;
			}
		}
	}
}