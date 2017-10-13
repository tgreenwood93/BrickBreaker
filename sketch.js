
//arrays of objects
var paddles = [], 
	balls = [], 
	bricks = [], 
	livesLeft = [],
	paddlePerks = [],
	paddlePerkBrick = [],
	ballInvince = [];

//arrays for histroy of paddle object
var paddleTail = [], 
	paddleAverage = [];

//booleans to deisplay text
var playingGame = false,
	youWin = false,
	isPaused = false,
	newGame = true,
	youLose = false;

//booleans to modify game
var extraBalls = false,
	clearDirectionChanger = false,
	scoreBreak = false,
	resetNextLevel = false,
	paddlePerk = false,
	setTimer = false,
	superBalls = false,
	usePaddlePerk = false;

//variables for text 
var winText,
	scoreText,
	pauseText,
    loseText,
    brickText;

//variables for timers 
var interval, 
	interval2,
	interval3;

//new vector
var v;

//scores
var score = 0,
 breakStreak = 0,
 scoreTest = 5;

//calulate average of histroy arrays
var avg = 0,
    avg2 = 0;

//variables 
var sec = 0, 
	DisplayNext = 0, 
	addOne = 1, 
	levelSystem = 0, 
	newBrickCount = 20, 
	PaddleChall = 7, 
	perks = 2, 
	brickCounter = 0, 
	brickCounterDisplay = 0;

/*###################################### Setup #####################################*/	
function setup() {
	createCanvas(windowWidth,(windowHeight-250));//sets canvas size
	//add objects to arrays
	for(var i=0; i<10; i++){
		bricks.push(new Brick());//adds 10 bricks into the bricks array
	}
	balls.push(new Ball());//adds a ball into the balls array
	for(var i=0; i<2; i++){
		livesLeft.push(new lives());//adds 2 life objects into the livesLeft array
	}
	paddles.push(new paddle());//adds a paddle into the paddles array
	paddlePerkBrick.push(new perkBrick());//adds the second paddle brick into its own array
	
	//call text display functions
	keepScore();//initalizes the score display on the page	
	gameOverText();//initalizes the game over text box
	pauseMenu();//initalizes the pause menu text box
	bricksBrokenCounter();//initalizes the brick counter on the page
	levelNumberText();//initalizes the level counter on the page
	strokeWeight(2);//bolder borders on all the objects
}

/*###################################### Draw Function #####################################*/	
function draw() {		
	background(255);
	twoPaddlePerkDisplay();	
	paddleUpdates();	
	drawRemainingLives();	
	drawAllBalls();
	for(var t=0; t<balls.length; t++){
		ballHitsPaddle(t);
		ballInteractionWithOtherBallsFunc(t);
		ballInteractionWithBricksFunc(t);
		ballInteractionWithPerkBrickFunc(t);
		ballFallsBelowScreenFunc(t)	
	}
	addBallPerk();	
	dispalyBricksOnScreen();
	levelSystemFunc();
	bonusRoundFunc();
	gameOverFunc();	
	displayMenus();	
	brickText.style('display', 'none');		
	bricksBrokenCounter();
	PaddleTail();//Calculate Paddle Interference
	paddleExtension();
	
}

/*################## Other Funcs ######################*/
function keyPressed() {
	if(key === "a" || key === 'A') {
		paddles[0].isMovingLeft = true;
	}else if(key === "d" || key === 'D'){ 
		paddles[0].isMovingRight = true;
	}else if(key === "j" || key === 'J') {
		paddles[1].isMovingLeft = true;
	}else if(key === "l" || key === 'L') {
		paddles[1].isMovingRight = true;			
	}else if(key === 's' || key === 'S'){
		playingGame = true;
		youWin = false;
		youLose = false;
	}else if((key === 'p' || key === 'P') && playingGame){
		if(isPaused){
		isPaused = false;
		}else{
		isPaused = true;
		}
	}else if((key === 'w' || key === 'W') && (ballInvince.length > 0) && playingGame && !superBalls){
//		useBallPerk = true;
		ballInvince.splice((ballInvince.length-1),1);
		superBalls = true;
		if (interval3 != null){
     		clearInterval(interval3);
		}
		interval3 = setInterval(superBallsFunc, 5000);			
	}else if((key === 'i' || key === 'I') && (paddlePerks.length > 0) && playingGame && !usePaddlePerk){
		usePaddlePerk = true;
		paddles.push(new paddle());
		paddles[1].pos.y = height-200;
		paddlePerks.splice((paddlePerks.length-1),1);
		if (interval != null) {
     		clearInterval(interval);
		}		
		interval = setInterval(secondPaddle, 20000);					
   	}	
}
	
function keyReleased() {
	for(var g =0; g<paddles.length; g++){
		paddles[g].isMovingLeft = false;
		paddles[g].isMovingRight = false;
	}
}

$('[rel="popover"]').popover({
	trigger: 'focus',
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
//$(function () {
//  $('[data-toggle="popover"]').popover()
//})

