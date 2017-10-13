function perkBrick() {
	this.r = random(61,80);
	
	this.pos = createVector(random(100, width - 100),random(100, height - 600));
	
	this.total = 6;
	
	this.fillColor = 10;
	this.negative = false;
	this.bigColor0 = ('#7CDBD5');
	this.smallColor1 = ('#07889B');
	this.smallColor2 = ('#A239CA');
	this.smallColor3 = ('#015249');
	this.smallColor4 = ('#F7882F');
	this.smallColor5 = ('#031424');

	this.medColor0 = ('#F53240');
	this.medColor1 = ('#66B9BF');
	this.medColor2 = ('#4717F6');
	this.medColor3 = ('#57BC90');
	this.medColor4 = ('#F7C331');
	this.medColor5 = ('#30415D');
	
	this.smallColor0 = ('#F9BE02');
	this.bigColor1 = ('#EEAA7B');
	this.bigColor2 = ('#E7DFDD');
	this.bigColor3 = ('#77C9D4');
	this.bigColor4 = ('#DCC7AA');
	this.bigColor5 = ('#8EAEBD');

	this.display = function(){
		push();
		translate(this.pos.x, this.pos.y);
		beginShape();
		for(var m = 0; m < this.total; m++){
			var angel = map(m, 0, this.total, 0, TWO_PI);
		    var x = this.r * cos(angel);
			var y = this.r * sin(angel);
			vertex(x, y);
		}
		endShape(CLOSE);
		pop();
	}
	
	this.perkbrickColorSelect = function(levelSystem) {
		
		if(this.r > 60){
			if(levelSystem == 0){
				stroke(this.bigColor0);
				fill(124,219,213,this.fillColor);
			}else if(levelSystem == 1){
				stroke(this.bigColor1);
				fill(238,170,123,this.fillColor);
			}else if(levelSystem == 2){
				stroke(this.bigColor2);
				fill(231,223,221,this.fillColor);				
			}else if(levelSystem == 3){
				stroke(this.bigColor3);
				fill(119,201,212,this.fillColor);				
			}else if(levelSystem == 4){
				stroke(this.bigColor4);
				fill(220,199,170,this.fillColor);					
			}else{
				stroke(this.bigColor5);
				fill(142,174,189,this.fillColor);					
			}		
		}else if(this.r > 40 && this.r < 61){
			if(levelSystem == 0){
				stroke(this.medColor0);
				fill(245,50,64,this.fillColor);
			}else if(levelSystem == 1){
				stroke(this.medColor1);
				fill(102,185,191,this.fillColor);
			}else if(levelSystem == 2){
				stroke(this.medColor2);
				fill(71,23,246,this.fillColor);
			}else if(levelSystem == 3){
				stroke(this.medColor3);
				fill(87,188,144,this.fillColor);
			}else if(levelSystem == 4){
				stroke(this.medColor4);
				fill(247,195,49,this.fillColor);
			}else{
				stroke(this.medColor5);
				fill(48,65,93,this.fillColor);
			}
		}else{
			if(levelSystem == 0){
				stroke(this.smallColor0);
				fill(249,190,2,this.fillColor);
			}else if(levelSystem == 1){
				stroke(this.smallColor1);
				fill(7,136,155,this.fillColor);
			}else if(levelSystem == 2){
				stroke(this.smallColor2);
				fill(162,57,202,this.fillColor);
			}else if(levelSystem == 3){
				stroke(this.smallColor3);
				fill(1,82,73,this.fillColor);
			}else if(levelSystem == 4){
				stroke(this.smallColor4);
				fill(247,136,47,this.fillColor);
			}else{
				stroke(this.smallColor5);
				fill(3,20,36,this.fillColor);
			}	
				
		}
		if(this.fillColor > 120){
			this.negative = true;
		}else if(this.fillColor < 25){
			this.negative = false;
		}
		if(this.negative){
			this.fillColor-=2;
		}else{
			this.fillColor+=2;
		}
	}
}