
/* ####### Paddle PowerUps #######*/
function paddleExtension(){
/*################## Paddle Perk - Paddle Extension ######################*/		
	if(score > 0 && ((score - (scoreTest*1000)) >= scoreTest)){
		paddlePerk = true;
		setTimer = true;
	}
	if(setTimer){
		if(levelSystem == 5){
			scoreTest += 15;	
		}else{ 
			scoreTest += 5;
		}
	    interval2 = setInterval(timeIt, 15000);
		setTimer = false;
	}
}

function timeIt(){
	if (interval2 != null){
     	clearInterval(interval2);
	}	
	paddlePerk = false;	
}

function secondPaddle(){
	paddlePerk = false;
	usePaddlePerk = false;	
	paddles.splice(1,1);
}


/* ####### Ball PowerUps #######*/
function addBallPerk() {
	if(brickCounter >= 50){
		if(ballInvince.length < 2){
		ballInvince.push(new rainbowBalls());
		}
		brickCounter = 0;		
	}
}

function superBallsFunc(){
	superBalls = false;
	if (interval3 != null){
     	clearInterval(interval3);
	}		
}