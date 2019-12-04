var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var gameCounter;
var game2048Initialize = false;
var instructionScreen2048;
var highscore2048 = 0;

var draw2048Background = function(){
    strokeWeight(5);
    noFill();
    stroke(0, 0, 0);

    // board
    rect(2,2,396,396);
    for(var i=1; i < 4; i++){
        line(0, i*100, 400, i*100);
    }
    for(var i=1; i < 4; i++){
        line(i*100, 0, i*100, 400);
    }

    textSize(100);
    fill(0, 0, 0);

    for(var i=0; i<row1.length; i++){
        var whatToDraw = row1[i];

        if(row1[i] === 0){
            whatToDraw = " ";
        }

        if(whatToDraw < 10){
            fill(0, 0, 0);
            textSize(100);
            text(whatToDraw, i*100 + 25, 85);
        }
        else if(whatToDraw < 100){
            textSize(75);
            fill(255, 183, 0);
            text(whatToDraw, i*100 + 10, 75);
        }
        else if(whatToDraw < 1000){
            textSize(55);
            fill(255, 119, 0);
            text(whatToDraw, i*100 + 4, 72);
        }
        else if(whatToDraw < 10000){
            textSize(40);
            fill(255, 0, 0);
            text(whatToDraw, i*100 + 7, 66);
        }
    }

    for(var i=0; i<row2.length; i++){
        var whatToDraw = row2[i];

        if(row2[i] === 0){
            whatToDraw = " ";
        }

        if(whatToDraw < 10){
            fill(0, 0, 0);
            textSize(100);
            text(whatToDraw, i*100 + 25, 185);
        }
        else if(whatToDraw < 100){
            textSize(75);
            fill(255, 183, 0);
            text(whatToDraw, i*100 + 10, 177);
        }
        else if(whatToDraw < 1000){
            textSize(55);
            fill(255, 119, 0);
            text(whatToDraw, i*100 + 4, 170);
        }
        else if(whatToDraw < 10000){
            textSize(40);
            fill(255, 0, 0);
            text(whatToDraw, i*100 + 7, 165);
        }
    }

    for(var i=0; i<row3.length; i++){
        var whatToDraw = row3[i];

        if(row3[i] === 0){
            whatToDraw = " ";
        }

        if(whatToDraw < 10){
            fill(0, 0, 0);
            textSize(100);
            text(whatToDraw, i*100 + 25, 285);
        }
        else if(whatToDraw < 100){
            textSize(75);
            fill(255, 183, 0);
            text(whatToDraw, i*100 + 10, 277);
        }
        else if(whatToDraw < 1000){
            textSize(55);
            fill(255, 119, 0);
            text(whatToDraw, i*100 + 4, 270);
        }
        else if(whatToDraw < 10000){
            textSize(40);
            fill(255, 0, 0);
            text(whatToDraw, i*100 + 7, 265);
        }
    }

    for(var i=0; i<row4.length; i++){
        var whatToDraw = row4[i];

        if(row4[i] === 0){
            whatToDraw = " ";
        }

        if(whatToDraw < 10){
            fill(0, 0, 0);
            textSize(100);
            text(whatToDraw, i*100 + 25, 385);
        }
        else if(whatToDraw < 100){
            textSize(75);
            fill(255, 183, 0);
            text(whatToDraw, i*100 + 10, 377);
        }
        else if(whatToDraw < 1000){
            textSize(55);
            fill(255, 119, 0);
            text(whatToDraw, i*100 + 4, 370);
        }
        else if(whatToDraw < 10000){
            textSize(40);
            fill(255, 0, 0);
            text(whatToDraw, i*100 + 7, 365);
        }
    }
};

var game2048Move = function(dir){

    if(dir === "DOWN"){
        for(var i=0; i<4; i++){
            if(row4[i] === 0 || row3[i] === row4[i]){
                row4[i] = row4[i] + row3[i];
                row3[i] = row2[i];
                row2[i] = row1[i];
                row1[i] = 0;
            }
            else if(row3[i] === 0 || row2[i] === row3[i]){
                row3[i] = row3[i] + row2[i];
                row2[i] = row1[i];
                row1[i] = 0;
            }
            else if(row2[i] === 0 || row1[i] === row2[i]){
                row2[i] = row2[i] + row1[i];
                row1[i] = 0;
            }
        }
    }

    if(dir === "UP"){
        for(var i=0; i<4; i++){
            if(row1[i] === 0 || row1[i] === row2[i]){
                row1[i] = row1[i] + row2[i];
                row2[i] = row3[i];
                row3[i] = row4[i];
                row4[i] = 0;
            }
            else if(row2[i] === 0 || row2[i] === row3[i]){
                row2[i] = row2[i] + row3[i];
                row3[i] = row4[i];
                row4[i] = 0;
            }
            else if(row3[i] === 0 || row3[i] === row4[i]){
                row3[i] = row3[i] + row4[i];
                row4[i] = 0;
            }
        }
    }

    if(dir === "RIGHT"){
        if(row4[3] === 0 || row4[3] === row4[2]){
            row4[3] = row4[3] + row4[2];
            row4[2] = row4[1];
            row4[1] = row4[0];
            row4[0] = 0;
        }
        else if(row4[2] === 0 || row4[2] === row4[1]){
            row4[2] = row4[2] + row4[1];
            row4[1] = row4[0];
            row4[0] = 0;
        }
        else if(row4[1] === 0 || row4[1] === row4[0]){
            row4[1] = row4[1] + row4[0];
            row4[0] = 0;
        }


        if(row3[3] === 0 || row3[3] === row3[2]){
            row3[3] = row3[3] + row3[2];
            row3[2] = row3[1];
            row3[1] = row3[0];
            row3[0] = 0;
        }
        else if(row3[2] === 0 || row3[2] === row3[1]){
            row3[2] = row3[2] + row3[1];
            row3[1] = row3[0];
            row3[0] = 0;
        }
        else if(row3[1] === 0 || row3[1] === row3[0]){
            row3[1] = row3[1] + row3[0];
            row3[0] = 0;
        }


        if(row2[3] === 0 || row2[3] === row2[2]){
            row2[3] = row2[3] + row2[2];
            row2[2] = row2[1];
            row2[1] = row2[0];
            row2[0] = 0;
        }
        else if(row2[2] === 0 || row2[2] === row2[1]){
            row2[2] = row2[2] + row2[1];
            row2[1] = row2[0];
            row2[0] = 0;
        }
        else if(row2[1] === 0 || row2[1] === row2[0]){
            row2[1] = row2[1] + row2[0];
            row2[0] = 0;
        }


        if(row1[3] === 0 || row1[3] === row1[2]){
            row1[3] = row1[3] + row1[2];
            row1[2] = row1[1];
            row1[1] = row1[0];
            row1[0] = 0;
        }
        else if(row1[2] === 0 || row1[2] === row1[1]){
            row1[2] = row1[2] + row1[1];
            row1[1] = row1[0];
            row1[0] = 0;
        }
        else if(row1[1] === 0 || row1[1] === row1[0]){
            row1[1] = row1[1] + row1[0];
            row1[0] = 0;
        }

    }

    if(dir === "LEFT"){
        if(row4[0] === 0 || row4[0] === row4[1]){
            row4[0] = row4[0] + row4[1];
            row4[1] = row4[2];
            row4[2] = row4[3];
            row4[3] = 0;
        }
        else if(row4[1] === 0 || row4[1] === row4[2]){
            row4[1] = row4[1] + row4[2];
            row4[2] = row4[3];
            row4[3] = 0;
        }
        else if(row4[2] === 0 || row4[2] === row4[3]){
            row4[2] = row4[2] + row4[3];
            row4[3] = 0;
        }

        if(row3[0] === 0 || row3[0] === row3[1]){
            row3[0] = row3[0] + row3[1];
            row3[1] = row3[2];
            row3[2] = row3[3];
            row3[3] = 0;
        }
        else if(row3[1] === 0 || row3[1] === row3[2]){
            row3[1] = row3[1] + row3[2];
            row3[2] = row3[3];
            row3[3] = 0;
        }
        else if(row3[2] === 0 || row3[2] === row3[3]){
            row3[2] = row3[2] + row3[3];
            row3[3] = 0;
        }

        if(row2[0] === 0 || row2[0] === row2[1]){
            row2[0] = row2[0] + row2[1];
            row2[1] = row2[2];
            row2[2] = row2[3];
            row2[3] = 0;
        }
        else if(row2[1] === 0 || row2[1] === row2[2]){
            row2[1] = row2[1] + row2[2];
            row2[2] = row2[3];
            row2[3] = 0;
        }
        else if(row2[2] === 0 || row2[2] === row2[3]){
            row2[2] = row2[2] + row2[3];
            row2[3] = 0;
        }

        if(row1[0] === 0 || row1[0] === row1[1]){
            row1[0] = row1[0] + row1[1];
            row1[1] = row1[2];
            row1[2] = row1[3];
            row1[3] = 0;
        }
        else if(row1[1] === 0 || row1[1] === row1[2]){
            row1[1] = row1[1] + row1[2];
            row1[2] = row1[3];
            row1[3] = 0;
        }
        else if(row1[2] === 0 || row1[2] === row1[3]){
            row1[2] = row1[2] + row1[3];
            row1[3] = 0;
        }
    }

    gameCounter++;
};


var keyPressed = function(){
    if(keyCode === DOWN){
        if(instructionScreen2048){
            instructionScreen2048 = false;
        }
        game2048Move("DOWN");
    }
    else if(keyCode === RIGHT){
        game2048Move("RIGHT");
    }
    else if(keyCode === LEFT){
        game2048Move("LEFT");
    }
    else if(keyCode === UP){
        game2048Move("UP");
    }
};

var add2048Number = function(){
    var row;
    var col;

    var boardFull = true;

    //check for full board
    for(var i=0; i < 4; i++){
        if(row1[i] === 0 || row2[i] === 0 || row3[i] === 0 || row4[i] === 0 ){
            boardFull = false;
        }
    }

    if(gameCounter > 100 && !boardFull){
        var Success = false;
        while(Success !== true){
        Success = false;
        row = Math.floor(random(0, 4));
        col = Math.floor(random(0, 4));

        if(row === 0){
            if(row1[col] === 0){
                Success = true;
            }
        }
        else if(row === 1){
            if(row2[col] === 0){
                Success = true;
            }
        }
        else if(row === 2){
            if(row3[col] === 0){
                Success = true;
            }
        }
        else if(row === 3){
            if(row4[col] === 0){
                Success = true;
            }
        }
        }

        debug(row, col);

        switch(row){
            case 0:
                if(row1[col] === 0){
                    row1[col] = 2;
                }
            break;
            case 1:
                if(row2[col] === 0){
                    row2[col] = 2;
                }
            break;
            case 2:
                if(row3[col] === 0){
                    row3[col] = 2;
                }
            break;
            case 3:
                if(row4[col] === 0){
                    row4[col] = 2;
                }
            break;
        }

        gameCounter = 0;
    }
};

var draw2049InstructionScreen = function(){
    background(255, 204, 0);
    textSize(100);
    fill(255, 255, 255);
    text("2048", 90, 110, 400, 400);

    noStroke();
    triangle(170, 60, 200, 60, 185, 85);
    rect(197, 60, 30, 5);
    rect(210, 60, 5, 25);

    fill(255, 204, 0);
    triangle(175, 60, 195, 60, 185, 75);

    fill(0, 0, 0);
    textSize(25);
    text("Press the DOWN ARROW to Start", 5, 300, 400, 400);
};

var getHighscore2048 = function(){
   var hs = 0;

   for(var i=0; i<4; i++){
       hs = hs + row1[i] + row2[i] + row3[i] + row4[i];
   }

   return hs;
};

var draw = function() {
    background(255,255,255);

    //initialize game
    if(game2048Initialize === false){
        game2048Initialize = true;

        row1 = [0,0,0,0];
        row2 = [0,0,0,0];
        row3 = [0,0,0,2];
        row4 = [0,0,2,2];
        gameCounter = 0;
        instructionScreen2048 = true;
        highscore2048 = 0;
    }

    if(instructionScreen2048){
        draw2049InstructionScreen();
    }
    else{
        gameCounter++;
        add2048Number();
        highscore2048 = getHighscore2048();
        debug(highscore2048);
        textSize(15);
        text("HS: " + highscore2048, 5, 8, 400, 400);

        draw2048Background();
    }
};
