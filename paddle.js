function paddle() {
	this.width = 260;
	this.height = 20;
	
	this.color0 = ('#02C8A7');
	this.color1 = ('#E37222');
	this.color2 = ('#0E0B16');
	this.color3 = ('#A5A5AF');
	this.color4 = ('#6B7A8F');
	this.color5 = ('#CF6766');
	
	this.red =   [2,227,14,165,107,207];
	this.green = [200,114,11,165,122,103];
	this.blue =  [167,34,22,175,143,102];	
	
	this.avg = 0;

	this.history = [];
	
	this.isMovingLeft = false;
	this.isMovingRight = false;
	
	this.pos = createVector(width/2,height-40);
	
	this.display = function() {
		rect(this.pos.x, this.pos.y, this.width, this.height);
	}
	
	this.update = function() {
//	    stroke(120,120,0);
		if(this.isMovingRight == true) {
			this.move(20);
		}else if(this.isMovingLeft == true) {
			this.move(-20);
		}
	}
	
	this.move = function(step) {
		this.pos.x += step;
	}
	
	this.checkEdges = function() {
		if(this.pos.x < 0){
			this.pos.x = 0;
		}else if(this.pos.x > windowWidth - this.width){
			this.pos.x = windowWidth - this.width;
		}	
	}
	
	this.paddleColorSelect = function(levelSystem) {
		
		if(levelSystem == 0){
			stroke(this.color0);
			fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem],25);
		}
		else if(levelSystem == 1){
			stroke(this.color1);
			fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem],25);
		}
		else if(levelSystem == 2){
			stroke(this.color2);
			fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem],25);
		}
		else if(levelSystem == 3){
			stroke(this.color3);
			fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem],25);
		}
		else if(levelSystem == 4){
			stroke(this.color4);
			fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem],25);
		}
		else{
			stroke(this.color5);
			fill(207,103,102,25);
		}	
	}
}