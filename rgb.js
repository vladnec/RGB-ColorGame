var numSquares = 6

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var span1 = document.querySelector("#span1");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
span1.textContent = pickedColor;


easyButton.addEventListener("click" , function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	span1.textContent = pickedColor;
	h1.style.background = "steelblue";
	for(var i = 0 ; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];

		} else {
			squares[i].style.display = "none";
		}
	}

	

});

hardButton.addEventListener("click" , function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	span1.textContent = pickedColor;
	h1.style.background = "steelblue";
	for (var i = 0 ; i < squares.length; i++){
		squares[i].style.background=colors[i];
		squares[i].style.display = "block";
	}
})



for(var i = 0 ; i < squares.length; i++){
	
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click" , function(){
		var clickedColor = this.style.backgroundColor;
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again";
	}	else {	
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again!"
	}

	});


}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length ; i++){
	//change each color to match
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for (var i = 0 ; i < num; i++){
		// get random color and push into array
		arr.push(randomColor());

	}
	// return array
	return arr;

}

function randomColor() {
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

resetButton.addEventListener("click" , function(){
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	// change color display to match 	pciked color
	span1.textContent = pickedColor;
	// change colors of the squares
	h1.style.background = "steelblue";
	this.textContent = "New Colors";
	for (var i = 0 ; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	messageDisplay.textContent = "";


});