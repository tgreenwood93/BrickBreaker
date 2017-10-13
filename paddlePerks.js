function paddlePerkDisplay() {
	this.width = 60;
	this.height = 15;
	
	this.pos = createVector(40, 60);	
	
	this.color0 = ('#02C8A7');
	this.color1 = ('#E37222');
	this.color2 = ('#0E0B16');
	this.color3 = ('#A5A5AF');
	this.color4 = ('#6B7A8F');
	this.color5 = ('#CF6766');
	
	this.red =   [2,227,14,165,107,207];
	this.green = [200,114,11,165,122,103];
	this.blue =  [167,34,22,175,143,102];	
	
	this.display = function() {
		stroke(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem]);
		fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem], 25);
		rect(this.pos.x, this.pos.y, this.width, this.height);
		
		stroke(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem]);
		fill(this.red[levelSystem],this.green[levelSystem],this.blue[levelSystem], 25);
		rect(this.pos.x+30, this.pos.y-30, this.width, this.height);
	}
}