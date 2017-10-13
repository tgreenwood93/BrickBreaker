function gameOverFunc(){
/*################## Game Over ######################*/		
	if(livesLeft.length == 0){
		breakStreak = 0;
		paddlePerkBrick.splice(0,1);
		ballInvince.splice(0,2);
		youLose = true;
		playingGame = false;
		levelSystem = 0;
		paddlePerkBrick.push(new perkBrick());	
		for(var y = 0; y<2;y++){
			livesLeft.push(new lives());
		}
		if(paddles.length>1){
		paddles.splice(1,1);
		}
		if(paddlePerks.length>0){
			paddlePerks.splice(0,2);
		}
		if(paddlePerks.length>0){
		ballInvince.splice(0,2);
		}
		brickCounter = 0;
	    bricks.splice(0,50);
		if (bricks.length == 0){
			for(var p=0; p<10; p++){
				bricks.push(new Brick());
			}		
		}
	}
	if(levelSystem == 0 && playingGame == true && scoreBreak == true){
		score = 0;
	    brickCounterDisplay = 0;
		scoreBreak = false;	
	}
}
function bonusRoundFunc(){
/*################## Bonus Round ######################*/		
	if(levelSystem === 5){
		if(bricks.length < 5){
			for(var i=0; i<newBrickCount; i++){
				bricks.push(new Brick());
			}	
			newBrickCount += 3;
			if(newBrickCount > 5){
				PaddleChall += 0.5;
				newBrickCount = 50;
			}	
		}
		if(paddlePerkBrick.length<1){
			paddlePerkBrick.push(new perkBrick());
		}
	}
}

function lastFourBricksSpeed(){
/*################## Last 4 Bricks - Increase Ball Speed ######################*/		
	if(bricks.length < 5){
		for(var u=0;u<balls.length; u++){
			balls[u].increaseSpeedAtEnd(levelSystem);
		}
	}
}

function levelSystemFunc(){
/*################## Level System ######################*/	
	if(bricks.length == 0 && paddlePerkBrick.length == 0){
		livesLeft.push(new lives());
		for(var i=0; i<newBrickCount; i++){
			bricks.push(new Brick());
		}
		paddlePerkBrick.push(new perkBrick());		
		breakStreak = 0;
		levelSystem += 1;
		if(levelSystem > 5){
			levelSystem = 0;
		}
		for(var t=0;t<paddles.length;t++){	
			paddles[t].width -= 20;
		}	
		playingGame = false;
		newBrickCount += 5;
		for(var e=0;e<balls.length;e++){
			balls[e].vel = createVector(1, 1).mult(6+(levelSystem+1));	
			balls[e].pos.x = (width/2);
			balls[e].pos.y = (height-100);
			balls[e].direction.x = 1;
			balls[e].direction.y = -1;	
		}
	}
}
