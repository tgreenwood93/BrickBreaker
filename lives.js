function lives(){
	this.color0 = ('#02C8A7');
	this.color1 = ('#E37222');
	this.color2 = ('#0E0B16');
	this.color3 = ('#A5A5AF');
	this.color4 = ('#6B7A8F');
	this.color5 = ('#CF6766');
	this.h = 60;	
this.pos = createVector(width-80,this.h);
this.r = 30;

	this.red = [2,227,14,165,107,207];
	this.green = [200,114,11,165,122,103];
	this.blue = [167,34,22,175,143,102];

this.display = function() {	
	stroke(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem]);
	fill(255,255);
	ellipse(width-80, this.pos.y, this.r*2, this.r*2);
}

this.ballColorSelect = function(levelSystem) {
		if(levelSystem == 0){
		stroke(this.color0);
		fill(255,255);
		}
		else if(levelSystem == 1){
		stroke(this.color1);
		fill(255,255);
		}
		else if(levelSystem == 2){
		stroke(this.color2);
		fill(255,255);
		}
		else if(levelSystem == 3){
		stroke(this.color3);
		fill(255,255);
		}
		else if(levelSystem == 4){
		stroke(this.color4);
		fill(255,255);
		}
		else{
		stroke(this.color5);
		fill(255,255);
		}
	}
	
}
