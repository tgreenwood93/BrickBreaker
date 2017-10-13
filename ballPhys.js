function ballHitsPaddle(t){
/*###################################### ball meets paddle #####################################*/	
	for(var r=0; r<paddles.length; r++){
		if(balls[t].meets(paddles[r]) && balls[t].direction.y > 0){
			balls[t].direction.y *= avg;
		if(balls[t].direction.y > -0.5){
			balls[t].direction.y = -0.5;
			}
		breakStreak = 0;
		clearDirectionChanger = true
		}
	}
}

function ballInteractionWithOtherBallsFunc(t){
/*##################################### Ball interaction with other balls #####################################*/			
	if(extraBalls){			
		for(var q=0; q<balls.length; q++){	
			if(balls[t].meetsOtherBall(balls[q])){
				if((balls[t].direction.x >= 0 && balls[t].direction.y >= 0 && balls[q].direction.x <= -1 && balls[q].direction.y <= -1) ||(balls[t].direction.x <= -1 && balls[t].direction.y <= -1 && balls[q].direction.x >= 0 && balls[q].direction.y >= 0) ||(balls[t].direction.x <= -1 && balls[t].direction.y >= 0 && balls[q].direction.x >= 0 && balls[q].direction.y <= -1)||(balls[t].direction.x >= 0 && balls[t].direction.y <= -1 && balls[q].direction.x <= -1 && balls[q].direction.y >= 0)){
					balls[q].direction.x *= -0.98; 	
		    		balls[t].direction.x *= -1; 
					balls[t].direction.y *= -0.96;			
					balls[q].direction.y *= -0.99;	
				}else if((balls[t].direction.x <= -1 && balls[t].direction.y >= 0 && balls[q].direction.x <= -1 && balls[q].direction.y <= -1)|| (balls[t].direction.x <= -1 && balls[t].direction.y <= -1 && balls[q].direction.x >= 0 && balls[q].direction.y <= -1)){			
					balls[q].direction.y *= -1.1; 	
		    		balls[t].direction.y *= -0.9; 
				}else if((balls[t].direction.x >= 0 && balls[t].direction.y >= 0 && balls[q].direction.x <= -1 && balls[q].direction.y <= -1)|| (balls[t].direction.x <= -1 && balls[t].direction.y <= -1 && balls[q].direction.x <= -1 && balls[q].direction.y >= 0)){		
					balls[t].direction.x *= -1;			
					balls[q].direction.x *= -1;	
				}else{
					balls[t].direction.y *= -1;			
					balls[q].direction.y *= -1;		
				}	
			}			
		}	
	}
}

function ballInteractionWithBricksFunc(t){
/*###################################### Ball interaction with Bricks #####################################*/				
	for(var j=0; j<bricks.length; j++){ //iterate throught all bricks
		if(balls[t].hits(bricks[j])){ //call func hits and check for all collisions 
			if(bricks[j].r > 60){  //if a big hexagon was hit reduce to med
				bricks[j].r = bricks[j].r - 20;
				score += 50; //add 50 to score count
			}else if(bricks[j].r > 40 && bricks[j].r < 61){ //if a med hexagon was hit reduce to small
				bricks[j].r = bricks[j].r - 20; 
				score += 75;//add 75 to score count
			}else{
				bricks.splice(j, 1); //cut small hexagon if hit
				score += 100;//add 100 to score count
				brickCounter++;
				brickCounterDisplay++;	
			}
			if(!superBalls){
			balls[t].direction.y *= -1; //change direction of ball after hitting object
			}
			if(!extraBalls){	
				breakStreak += 1;
			}
		}
	}
}
function ballInteractionWithPerkBrickFunc(t){
	if(paddlePerkBrick.length>0){
		if(balls[t].hits(paddlePerkBrick[0])){
			if(paddlePerkBrick[0].r > 60){  //if a big hexagon was hit reduce to med
				paddlePerkBrick[0].r = paddlePerkBrick[0].r - 20;
				score += 50; //add 50 to score count
			}else if(paddlePerkBrick[0].r > 40 && paddlePerkBrick[0].r < 61){ //if a med hexagon was hit reduce to small
				paddlePerkBrick[0].r = paddlePerkBrick[0].r - 20; 
				score += 75;//add 75 to score count
			}else{
				paddlePerkBrick.splice(0, 1); //cut small hexagon if hit
				score += 100;//add 100 to score count
				brickCounter++;
				brickCounterDisplay++;	
				if(paddlePerks.length<2){
					paddlePerks.push(new paddlePerkDisplay());
				}
			}
			if(!superBalls){
			balls[t].direction.y *= -1; //change direction of ball after hitting object		
			}
			if(!extraBalls){	
				breakStreak += 1;
			}
		}		
	}
}
function ballFallsBelowScreenFunc(t){
/*###################################### Ball falling below screen #####################################*/			
	if(balls[t].pos.y > height && balls.length == 1){
		livesLeft.splice(0,1);
		balls[t].pos = createVector(width/2,height-100);
		balls[t].vel = createVector(1, 1).mult(6+(levelSystem+1));		
		balls[t].history.splice(0,10);
		balls[t].direction.x = 1;
		balls[t].direction.y = -1;
		playingGame = false;
		}
	if(balls[t].pos.y > height){
	   	balls.splice(t,1);
		if(balls.length === 1){
			extraBalls = false;
			breakStreak = 0;
			sec = 0;
		}		
	}
}