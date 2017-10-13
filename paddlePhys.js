
function PaddleTail(){
/*################## Calculate Paddle Interference ######################*/			
	v = paddles[0].pos.x;
    paddleTail.push(v); 
    if(paddleTail.length > 2){
      	paddleTail.splice(0, 1);
	}
	avg2 = abs(paddleTail[0]-paddleTail[1])/20;
		
	paddleAverage.push(avg2);
	    if(paddleAverage.length > 31){
      	    paddleAverage.splice(0,1);
		}
	    avg = 0;
		for(var i=1;i<paddleAverage.length;i++){
			avg += paddleAverage[i];
		}
	    	avg = -1*(0.90+((avg/90)));
		if(clearDirectionChanger){
			for(var f = 0;f<paddleAverage.length;f++){
			paddleAverage[f]=0;
			clearDirectionChanger = false;
		}
	}	
}