function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(200);
	
	
	// Warmup
	for (var x = 100; x < width; x = x + 100) {
		ellipse(x, 60, x / 10, x / 10);
	}

	// #1
	for (var x = 0; x < width; x = x + 10) {
		fill("aqua")
		ellipse(x, 60, x / 10, x / 10);
	}

	// #2
	for (var x = 100; x < width; x = x + 100) {
		ellipse(x, 60, x, x);
	}

	// #3
	for(var x = 0; x < width; x = x + 100) {
    fill(0, 0 , map(x, 0, width, 0, 255))
    ellipse(x, 100, 40, 40);
  }
	// #4
	for (var x = 0; x < width; x = x + 25) {
    noStroke();
    fill(map(x, 0, width, 0, 255), 0, 0);
    ellipse(x, 200, 20, 20);
  }

	// #5
	for (var x = 0; x < width; x = x + 1) {

		noStroke()
		fill(map(x, 0, width, 0, 255), 0, 0)
		rect(x, 50, 1,10)
		fill(0, map(x, 0, width, 0, 255),0)
		rect(x, 100, 1,10)
		fill(0, 0 , map(x, 0, width, 0, 255))
		rect(x, 150, 1,10)
	}

	// #6
	var size = 400;
	for (var i = 0; i < 5; i = i + 1) {
		stroke("black")
		fill("white")
    //draw ellipses in the center of the canvas set to the size variable
    ellipse(width / 2, height / 2, size, size);

    //every time the loop runs(which will be 5 times) the size is decreased by 60
    size = size - 60;
  }

	// #7
	for (x = 100; x < width; x = x + 100) {

    //face color
    fill(50, 200, 200);
    //draw an ellipse at that x location
    ellipse(x, 60, 50, 50);
    //add a black fill
    fill(0);
    //draw a smaller ellipse 7 pixels to the right of the face center for right eye
    ellipse(x + 7, 55, 7, 5);
    //draw a smaller ellipse 7 pixels to the left of the face center for left eye
    ellipse(x - 7, 55, 7, 5);

    /*the mouth is assigned a height of x/25 so that the height grows through the loop
    but not as drastically as x alone. 100 is added to x each loop. If it is divided
    by 25, it increments by 4 each loop*/

    //draw an ellipse a little bit lower than center
    ellipse(x, 70, 7, x / 25);
  }








}