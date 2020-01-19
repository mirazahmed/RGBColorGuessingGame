var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){

	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons () {
		//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++){
	   modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares =6;
		reset();

		//figure out how many squares to show
		//pick new colors
		//pick a new pickColor
		//update page to reflect changes
		});

	}
}


function setupSquares(){
	for(var i = 0; i < squares.length; i++){
			//add click listeners to squares
		   squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDispaly.textContent = "Correct!";
				resetButton.textContent = "Play Agian?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
			  	this.style.backgroundColor = "#232323";
			  	messageDispaly.textContent = "Try Agian";
			}
		});
	}	   
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	messageDispaly.textContent = "";
	//change colors of squreas
	for(var i =0; i <squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";

		}
		
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// hardBtn.classList.remove("selected");
// easyBtn.classList.add("selected");
// numSquares = 3;
// colors = generateRandomColors(numSquares);
// pickedColor = pickColor();
// colorDisplay.textContent = pickedColor;
// for(var i=0; i < squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}

// 	}
// });

// hardBtn.addEventListener("click",function(){
// hardBtn.classList.add("selected");
// easyBtn.classList.remove("selected");
// numSquares = 6;
// colors = generateRandomColors(numSquares);
// pickedColor = pickColor();
// colorDisplay.textContent = pickedColor;
// for(var i=0; i < squares.length; i++){
		
// 			squares[i].style.backgroundColor = colors[i];
		
// 			squares[i].style.display = "block";
	

// 	}

// });

resetButton.addEventListener("click", function(){

	reset();
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick new random color from array
	// pickedColor = pickColor();
	// //Change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";

	// messageDispaly.textContent = "";
	// //change colors of squreas
	// for(var i =0; i <squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
})

// for(var i = 0; i < squares.length; i++){

	
// 	//add click listeners to squares
//    squares[i].addEventListener("click", function(){
// 	//grab color of clicked square
// 	var clickedColor = this.style.backgroundColor;
// 	//compare color to pickedColor
// 	if(clickedColor === pickedColor){
// 		messageDispaly.textContent = "Correct!";
// 		resetButton.textContent = "Play Agian?";
// 		changeColors(clickedColor);
// 		h1.style.backgroundColor = clickedColor;
// 	} else {
// 	  	this.style.backgroundColor = "#232323";
// 	  	messageDispaly.textContent = "Try Agian";
// 	}
//   });
// }

function changeColors(color){
	//loop through all the squares
	for(var i=0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//Math.random() to get a random number
	//Math.random() * 6 - to get a random number between 0 to  6
	//Math.random() *6 + 1 - to get a random number between 1 to 6
	//Math.floor(Math.Random() * 6 + 1)- to get a whole number without decimal
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	let arr = [];
	//repeat num times
	for (var i =0; i < num; i++){
	//get random color and push into arr
	arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256 );
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256 );
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256 );
	//"rgb(r, g, b)""
	return "rgb(" + r + ", " + g + ", " + b + ")";
}