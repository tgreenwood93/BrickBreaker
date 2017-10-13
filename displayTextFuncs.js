function displayMenus(){
/*################## You Lose Text Display on DOM ######################*/		
	if(youLose){
		loseText.style('display', 'block');
		playingGame = false;
		isPaused = false;
		scoreBreak = true;
		newGame = 'true';
	}else{
	    loseText.style('display', 'none');
	}
/*################## Score Display on DOM ######################*/	
	scoreText.style('display', 'none');			
	keepScore();
/*################## Level Display on DOM ######################*/		
	levelText.style('display', 'none');
	levelNumberText();	
/*################## Pause Menu on DOM ######################*/		
	if(isPaused == true){
		pauseText.style('display', 'block');
	}else{
	    pauseText.style('display', 'none');
	}
}

function gameOverText() {
	loseText = createP("GAME OVER! <br> Press S to start a new game!");
	loseText.position(width/2, 350);
}

function keepScore(){	
	scoreText = createP("Score: " + score);
    scoreText.parent("score"); 
}

function levelNumberText(){	
	if(levelSystem < 5){
    	levelText = createP("Level: " + (levelSystem+1));
	}else{
		levelText = createP("BONUS ROUND!");
	}
	levelText.parent("level"); 
}

function pauseMenu(){
	pauseText = createP("PAUSED");
	pauseText.position(width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function bricksBrokenCounter(){	
	brickText = createP("Bricks Broken: " + brickCounterDisplay);
    brickText.parent("bricksBroken"); 
}

