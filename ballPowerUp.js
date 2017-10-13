function rainbowBalls(){

	this.h = 60;	
	this.pos = createVector(80,200);
	this.r = 30;
	
	this.hue = 0; 
 	this.color = 0;
	this.color2 = 0;

	this.display = function() {	
		push();
		colorMode(HSB, 255);
	
		if(this.color > 320){
			this.color = 0
		}
    	this.color2 = ((this.color*-1)+320);
		stroke(this.color, 255, 255);
		fill(this.color, 75, 255);
		this.color+=2;
		ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
		pop();
	}	
}