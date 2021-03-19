function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are a few random lines, you will have to replace with your code
	line(-0.5, 0.3,-0.5,-0.3);
	line(0.3,-0.3,-0.5, -0.3);
    line(0.3, 0.3,-0.5, 0.3);

	beginx = 0.3;
	beginy = -0.3;
	centerX = 0.3;
	centerY = 0;
	radius = 0.3;
	steps = 64;
	for (var i = -steps/ 2 ; i < steps/ 2 ; i++) {
		xValues = (centerX + radius * Math.cos( Math.PI * i / steps));
		yValues = (centerY + radius * Math.sin( Math.PI * i / steps));
		line(beginx, beginy, xValues, yValues )
		beginx = xValues;
		beginy = yValues;
	} 

}

function degrees_to_radians(degrees){
	return degrees * Math.PI / 180;
}