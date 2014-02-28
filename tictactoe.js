// Initialize Variables
var	userInput = new Array();
var	AIInput = new Array();
var Painted = new Array();
var gameOver = false;
var winDisplay;
var winningComb;
	window.onload=start;
	document.getElementById("reload").addEventListener("click",function(){window.location.reload()},false);
	gameBoard.c0.addEventListener("click", function(){clicked(gameBoard.c0)}, false);
	gameBoard.c1.addEventListener("click", function(){clicked(gameBoard.c1)}, false);
	gameBoard.c2.addEventListener("click", function(){clicked(gameBoard.c2)}, false);
	gameBoard.c3.addEventListener("click", function(){clicked(gameBoard.c3)}, false);
	gameBoard.c4.addEventListener("click", function(){clicked(gameBoard.c4)}, false);
	gameBoard.c5.addEventListener("click", function(){clicked(gameBoard.c5)}, false);
	gameBoard.c6.addEventListener("click", function(){clicked(gameBoard.c6)}, false);
	gameBoard.c7.addEventListener("click", function(){clicked(gameBoard.c7)}, false);
	gameBoard.c8.addEventListener("click", function(){clicked(gameBoard.c8)}, false);
	
//the start function to initialize cells and winstates
function start() {
	winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	winDisplay = document.getElementById("winState");
	initializeCells();
}

//initialize cells to ""
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

//get play's move
function clicked (cell) {
	//if a cell is not played and the game is not over, then "O" is displayed in the cell as user input
	if (cell.value == '' && !gameOver ) {
		cell.value = 'O';
		//store user input in an array
		userInput.push(Number(cell.name.charAt(1)));
		checkIfUserWin();
		checkIsTie();
		//after players move, it is the AI's turn
		if (!gameOver){
		AIMove();
		}
	}
}

//announce the game result when the player or the AI win
function userWin() {
	winDisplay.innerHTML = "You Won!";
}

function AIWin() {
	winDisplay.innerHTML = "You lost, So Close!";
}

//check if user win
function checkIfUserWin() {
	//for each possible winning combination, check if the user's input matches the winning combination
	for(var i = 0; i < winningCombo.length; i++){
		var checkLength = 0;
		for(var j = 0; j < winningCombo[i].length; j++) {
			for(var k = 0; k < userInput.length; k++){
				//in a specific combination, if the user has all three of the element, then the user win
				if (userInput[k]==winningCombo[i][j]){
					checkLength++;
					if (checkLength == 3) {
						userWin();
						//the game is over when the user win
						gameOver = true;
						break;
					}
				}
			}
		}
	}
}

//check if AI win
function checkIfAIWin() {
	//for each possible winning combination, check if the AI's input matches the winning combination
	for(var i = 0; i < winningCombo.length; i++){
		var checkLength = 0;
		for(var j = 0; j < winningCombo[i].length; j++) {
			for(var k = 0; k < AIInput.length; k++){
				//in a specific combination, if the AI has all three of the element, then the AI win
				if (AIInput[k]==winningCombo[i][j]){
					checkLength++;
					if (checkLength == 3) {
						AIWin();
						//the game is over when the AI win
						gameOver = true;
						break;
					}
				}
			}
		}
	}
}

//AI marks a cell as "X" with a given cell number
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

//check if the specific cell number is occupied, return false if it is not and return true otherwise
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

//if all of the 9 cells are played and there is still no winner, announce a tie
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

//AI makes a play after each user's move
function AIMove() {
	var AImoved = false;
	//for the first move, if the user click on the center cell, 
	//then the AI will check the first cell. Otherwise, AI picks center
	//everytime the AI makes a play, store the move to the AIInput array 
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
		//when it is not the first AI move
	} else {
		//for all of the possible winning combinations, 
		//if the AI's input contains 2 of the 3 cells that makes it win 
		//and the third cell is not occupied then play it.
		var i = 0;
		while(i < winningCombo.length && !AImoved){
			var checkLength = 0;
			var j = 0
			while(j < winningCombo[i].length && !AImoved) {
				var k = 0;
				while(k < AIInput.length && !AImoved){
					if (AIInput[k]==winningCombo[i][j]){
						checkLength++;
						if (checkLength == 2) {
							var l = 0;
							//check if the third cell is open
							while (l < 3 && !AImoved){
								if (!checkIfPainted(winningCombo[i][l])){
									AIPaint(winningCombo[i][l]);
									AIInput.push(winningCombo[i][l]);
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
		//for all of the possible winning combinations, 
		//if the user's input contains 2 of the 3 cells that makes the user win 
		//and the third cell is not occupied then play it
		var i = 0;
		while(i < winningCombo.length && !AImoved){
			var checkLength = 0;
			var j = 0
			while(j < winningCombo[i].length && !AImoved) {
				var k = 0;
				while(k < userInput.length && !AImoved){
					if (userInput[k]==winningCombo[i][j]){
						checkLength++;
						if (checkLength == 2) {
							var l = 0;
							//check if the third cell is open
							while (l < 3 && !AImoved){
								if (!checkIfPainted(winningCombo[i][l])){
									AIPaint(winningCombo[i][l]);
									AIInput.push(winningCombo[i][l]);
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

		//if there is no cell can be played to stop the user winning
		//and if there is no cell cen be played to let the AI win
		//then play the cell that has the lowest id number
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