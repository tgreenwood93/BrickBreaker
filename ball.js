function Ball() {
	this.pos = createVector(width/2,height-100);
	this.r = 30;
	this.speed = 4;
	this.direction = createVector(1,-1.12);
	this.vel = createVector(1, 1).mult(6);
	
	this.history = [];
	this.color2 = 0;
	this.color = 0;	
	this.color0 = ('#02C8A7');
	this.color1 = ('#E37222');
	this.color2 = ('#0E0B16');
	this.color3 = ('#A5A5AF');
	this.color4 = ('#6B7A8F');
	this.color5 = ('#CF6766');
	this.updateColor;
	this.red =   [2,227,14,165,107,207];
	this.green = [200,114,11,165,122,103];
	this.blue =  [167,34,22,175,143,102];
	
	this.madeContactWithPaddle = false;
	
	this.display = function(levelSystem, superBalls) {
  		if(!superBalls){
			for (var i = 0; i < this.history.length; i++) {
      			var pos = this.history[i];
      			noStroke();
				fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem],(50+(i*-3)));
      			ellipse(pos.x, pos.y, 63,63);
			}
    	stroke(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem]);
		fill(255,255);
		ellipse(this.pos.x-this.direction.x, this.pos.y-this.direction.y, this.r*2, this.r*2);
		}else{
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
	
	this.update = function() {	
		this.pos.x += (this.vel.x * this.direction.x);
		this.pos.y += (this.vel.y * this.direction.y);
	}
		
	this.checkEdges = function() {
		if(this.pos.y < this.r && this.direction.y < 0)
			this.direction.y *= -1;
		else if(this.pos.x < this.r && this.direction.x < 0)
			this.direction.x *= -1;
		else if(this.pos.x > width - this.r && this.direction.x > 0)
			this.direction.x *= -1;
	}
	
	
	this.meets = function(paddle) {
		if(this.pos.y < paddle.pos.y && 
		   this.pos.y > paddle.pos.y - this.r &&
		   this.pos.x > paddle.pos.x - this.r && 
		   this.pos.x < paddle.pos.x + paddle.width + this.r){
		   return true;
		}else return false;
	}
	
	this.meetsOtherBall = function(balls) {
		var d = dist(this.pos.x, this.pos.y, balls.pos.x, balls.pos.y);
	 	if (d < this.r + balls.r){
		 return true;	
		}else return false;
	}	
	
	this.hits = function(Brick) {
		var distance = dist(this.pos.x, this.pos.y, Brick.pos.x, Brick.pos.y);
		if(distance < this.r + Brick.r) 
			return true;
		else{ 
			return false;
		}
	}
	
	this.hitsPerk = function(paddlePerkBrick) {
		var distance2 = dist(this.pos.x, this.pos.y, perkBrick.pos.x, perkBrick.pos.y);
		if(distance2 < this.r + perkBrick.r) 
			return true;
		else{ 
			return false;
		}
	}
	
	this.tail = function() {
    var v = createVector(this.pos.x, this.pos.y);
    this.history.push(v); 
    if (this.history.length > 2) {
      this.history.splice(0, 1);
    }	
	}
	
	this.increaseSpeedAtEnd = function(levelSystem){
			this.vel = createVector(1, 1).mult(8+(levelSystem+1));
		}	

	this.directionChange = function() {
	var directRand = random(0,4);
	if(directRand == 0){	
		this.direction = createVector((1+(random(0,30)/30)),(1+(random(0,30)/30)));
	}
	else if(directRand == 1){
		this.direction = createVector(-1*(1+(random(0,30)/30)),-1*(1+(random(0,30)/30)));
	}
	else if(directRand == 2){	
		this.direction = createVector(-1*(1+(random(0,30)/30)),(1+(random(0,30)/30)));
	}else{
		this.direction = createVector((1+(random(0,30)/30)),-1*(1+(random(0,30)/30)));}	

	}
}