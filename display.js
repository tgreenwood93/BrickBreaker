function paddleUpdates(){
	for(var g=0; g<paddles.length; g++){
		var u = 1;
		if(paddlePerk){
			paddles[g].width = 320;	
		}else{
			if(levelSystem < 5){
			paddles[g].width = (260-(levelSystem*20));
			}else{ 	
				paddles[g].width = (260-(PaddleChall*20));
				if(paddles[g].width < 20 ){
					paddles[g].width = 20;
				}	
			}
		}
		paddles[g].paddleColorSelect(levelSystem);	
		paddles[g].display();
    	paddles[g].update();
		paddles[g].checkEdges();
		if(paddlePerk){
			u++;
		}else{
			u=0;
		}
	}
}

function twoPaddlePerkDisplay(){	
 	if(paddlePerks.length>0){	
		if(paddlePerks.length>1){	
			paddlePerks[1].pos.y = 60;
		}
		for(var i=0; i<paddlePerks.length;i++){
			if(paddlePerks.length>1){	
				paddlePerks[1].pos.y += 35;
			}
			if(paddlePerks != undefined){
	 			paddlePerks[i].display();
			}
		}
 	}
}

function drawRemainingLives(){
	/*############## Draw Lives Left Function ###############*/		
	for(var v=0; v<livesLeft.length; v++){
		DisplayNext = livesLeft[0].h;
		for(var t=v+1; t<livesLeft.length;t++){
			livesLeft[v].pos.y = 100;
			DisplayNext += 80
			livesLeft[v].pos.y = DisplayNext;	
		}
		livesLeft[v].display(levelSystem);
	}
}

function drawAllBalls(){	
/*############## Draw Balls Function ###############*/
	if(ballInvince.length>0){
		if(ballInvince.length>1){	
			ballInvince[1].pos.y = 200;
		}
		for(var i=0; i<ballInvince.length;i++){
			if(ballInvince.length>1){
				ballInvince[1].pos.y += 42;	
			}
	 		ballInvince[i].display();
		}
	}
	if(playingGame){		
		if(breakStreak > 7 && extraBalls == false){
			extraBalls = true;	
			for(var e=1;e<4;e++){
				balls.push(new Ball());
				balls[e].vel = createVector(1, 1).mult(6+(levelSystem+1));		
				balls[e].pos.x = balls[0].pos.x;
		    	balls[e].pos.y = balls[0].pos.y;	
				balls[e].directionChange();
		    	balls[e].update();
			}	
		}
	}
	for(var t=0; t<balls.length; t++){
		if(balls[t]){
			balls[t].display(levelSystem, superBalls);		
			balls[t].tail();
			if(!isPaused){
				if(playingGame){	
					balls[t].checkEdges();		
    				balls[t].update();	
				}
			}
		}
	}
}

function dispalyBricksOnScreen(){
/*################## Display Bricks ######################*/		
	for(var j=0;j<bricks.length;j++){
		if(bricks[j] != undefined){
			var Bricksleft = bricks.length;
			bricks[j].brickColorSelect(levelSystem, Bricksleft);
			bricks[j].display();
		}
	}
	if(paddlePerkBrick.length>0){
		paddlePerkBrick[0].perkbrickColorSelect(levelSystem);		
		paddlePerkBrick[0].display();
	}	
}


