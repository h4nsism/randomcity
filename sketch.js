let skyNum = 0;

function setup() {
  createCanvas(900, 600);
  background(255);
}


function draw() {
}


function mousePressed () {
  let bridgeCheck = 0;
  skyNum = int(random(1,7));
  noStroke();
  
  // sky color
  if (skyNum == 1){
    fill('#4c577d');
    rect(0,0,900,50);
    fill('#c2d6e2');
    rect(0,50,900,200);
    fill('#e9ebdb');
    rect(0,250,900,50);
    fill('#f87331');
    rect(0,300,900,50);
    fill('#f85231');
    rect(0,350,900,250);
  }
  
  if(skyNum == 2){
    fill('#33c0eb');
    rect(0,0,width,height);
  }
  
  if(skyNum == 3){
    fill('#a577b5');
    rect(0,0,900,30);
    fill('#f66743');
    rect(0,30,900,170);
    fill('#f49e88');
    rect(0,200,900,100);
    fill('#ffea8d');
    rect(0,300,900,300);
  }
  
  if(skyNum == 4){
    fill('#261948');
    rect(0,0,900,100);
    fill('#332967');
    rect(0,100,900,150);
    fill('#4f4599');
    rect(0,250,900,50);
    fill('#764599');
    rect(0,300,900,300);
  }
  
  if(skyNum == 5){
    fill('#838e94');
    rect(0,0,width,height);
  }
  
  if(skyNum == 6){
    fill('#cfd9de');
    rect(0,0,width,height);
  }


  // cloud 1st
  
  if(skyNum == 2){
    for (i=0; i<random(1,4); i++){
      fill('rgba(255, 255, 255,0.7)');
      rect(random(0,800),random(-50,250),random(80,300),random(50,80));  
      rect(random(0,800),random(-50,250),random(80,300),random(20,50));      
    }
  }
  if(skyNum == 3){
    for (i=0; i<random(1,3); i++){
      fill('rgba(204, 195, 180,0.7)');
      rect(random(0,800),random(-50,300),random(80,300),random(50,80));   
      rect(random(0,800),random(-50,300),random(80,300),random(20,50));      

    }
  }
  if(skyNum == 4){
    for (i=0; i<random(1,2); i++){
      fill('rgba(151, 120, 151,0.7)');
      rect(random(0,800),random(-50,100),random(80,300),random(30,70)); 
      rect(random(0,800),random(-50,250),random(80,300),random(20,50));      
  
    }
  }
  if(skyNum == 5){
    for (i=0; i<random(1,4); i++){
      fill('rgba(194, 189, 194,0.7)');
      rect(random(0,800),random(-50,100),random(80,300),random(70,80)); 
      rect(random(0,800),random(-50,250),random(80,300),random(20,50));      
  
    }
  }
  if(skyNum == 6){
    for (i=0; i<random(1,2); i++){
        fill('#eceded');
        rect(random(0,800),random(-50,100),random(80,300),random(50,80));     
    }
  }

   
  // sun moon star
  if(skyNum == 1){
    let morningSunSize = random(90,150);
    fill('rgba(255, 244, 94, 1)');
    ellipse(random(-30,880),random(200,350), morningSunSize, morningSunSize);
  }
// 낮에는 해의 등장 빈도를 줄임.
  if(skyNum == 2){
    let noonSunSize = random(40,60);
    fill('rgba(253, 253, 223, 1)');
    ellipse(random(30,870),random(-300,100),noonSunSize,noonSunSize);
  }

  if(skyNum == 3){
    let afterSunSize = random(90,150);
    fill('rgba(255, 69, 1,0.8)');
    ellipse(random(-30,880),random(200,350), afterSunSize, afterSunSize);
  }

  // star
  if (skyNum == 4){
    for (i=0; i<random(0,30); i++){
      stroke('white');
      strokeWeight(2);
      point(random(0,600),random(0,300));
    }
    noStroke();
  }

// random moon type generator
  if(skyNum == 4){
    let moonX = random(40,830);
    let moonY = random(0,100);
    let moonShape = int(random(0,3));
    fill('rgba(229, 252, 255,0.8');

    if (moonShape==0){
      push();
      translate(moonX,moonY);
      beginShape();
      vertex(30, 20);
      bezierVertex(80, 20, 80, 75, 30, 75);
      bezierVertex(60, 70, 60, 25, 30, 20);
      endShape();
      pop();
    }
    
    if (moonShape==1){
      push();
      translate(moonX,moonY);
      beginShape();
      vertex(70, 20);
      bezierVertex(20, 20, 20, 75, 70, 75);
      bezierVertex(40, 70, 40, 25, 70, 20);
      endShape();
      pop();
    }

    if(moonShape==2){
      ellipse(moonX,moonY,50,50);
    }

  }

  // cloud 2nd.
  if(skyNum == 1){
    for (i=0; i<random(1,4); i++){
      fill('rgba(165, 183, 198, 0.7)');
      rect(random(0,800),random(-50,200),random(80,300),random(30,70));
      rect(random(0,800),random(-50,200),random(80,300),random(20,50));      
    }
  }
  if(skyNum == 2){
    for (i=0; i<random(1,4); i++){
      fill('rgba(255, 255, 255,0.7)');
      rect(random(0,800),random(-50,200),random(80,300),random(50,80));  
    }
  }
  if(skyNum == 3){
    for (i=0; i<random(1,4); i++){
      fill('rgba(171, 158, 137,0.7)');
      rect(random(0,800),random(-50,200),random(80,300),random(50,80));   
      rect(random(0,800),random(-50,200),random(80,300),random(20,50));      

    }
  }
  if(skyNum == 4){
    for (i=0; i<random(1,2); i++){
      fill('rgba(151, 120, 151,0.7)');
      rect(random(0,800),random(-50,300),random(80,300),random(30,70));   
    }
  }

  if(skyNum == 5){
    for (i=0; i<random(1,5); i++){
      fill('rgba(104, 99, 104, 0.7)');
      rect(random(0,800),random(-50,300),random(80,300),random(70,80)); 
      rect(random(0,800),random(-50,200),random(80,300),random(20,50));      
  
    }
  }

  // mountain generator

  let mountNum = random(0,4);
  for (i=0; i<mountNum; i++){
    let backMountX = random(-50,850);
    if(skyNum == 1){
      fill('#ffffa1'); 
    }else if(skyNum == 2){
      fill('#7d9d9d');
    }else if(skyNum == 3){
      fill('#df9f67');
    }else if(skyNum == 4){
      fill('#152e28');
    }else if(skyNum == 5){
      fill('#b8b8b8');
    }else if(skyNum == 6){
      fill('#b8b8b8');
    }
    triangle(backMountX, 600, backMountX + random(500,800), 600, backMountX + random(50,100), 600 - random(200,300));
  }

  for (i=0; i<mountNum; i++){
    let frontMountX = random(-50,850);
    if(skyNum == 1){
      fill('#2e3230'); 
    }else if(skyNum == 2){
      fill('#125a2f');
    }else if(skyNum == 3){
      fill('#271a0f');
    }else if(skyNum == 4){
      fill('#475753');
    }else if(skyNum == 5){
      fill('#475550');
    }else if(skyNum == 6){
      fill('#777d7a');
    }
    triangle(frontMountX, 600, frontMountX + random(100,500), 600, frontMountX + random(50,100), 600 - random(200,300));
  }
    // river
    if (random(0,10)>0){
      if(skyNum == 1){
        fill('#4c7076'); 
      }else if(skyNum == 2){
        fill('#328491');
      }else if(skyNum == 3){
        fill('#606473');
      }else if(skyNum == 4){
        fill('#303a5d');
      }else if(skyNum == 5){
        fill('#646f71');
      }else if(skyNum == 6){
        fill('#8bb9c2');
      }
      rect(0,560,900,40);
    }
  
  // blur
    filter(BLUR, 5);

      
  // back buildings produce
  
  for (i=0; i<random(5,13); i++){
    let buildX = random(-30,800);
    let buildY = random(50,250);
    let buildW = random(130,500);
    if(skyNum == 1){
      fill('#6a7a87'); 
      rect(buildX,buildY,buildW,600);
      //windows
      for (i=0; (i+2)*20 < buildW; i++){
        for (j=0; j<random(0,20); j++){
          fill('#ffd9ad');
          if (random(0,10)>6){
            fill('#6a7a87');
          }
          if (random(0,5)>3){
            fill('#675752');
          }
          rect(buildX+10+20*i, buildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 2){
      fill('#6b8ea2');
      rect(buildX,buildY,buildW,600);
      for (i=0; (i+2)*20 < buildW; i++){
        for (j=0; j<random(0,20); j++){
          fill('#9ee6fd');
          if (random(0,4)>2){
            fill('#6b8ea2');
          }
          if (random(0,4)>2){
            fill('#5c7989');
          }
          rect(buildX+10+20*i, buildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 3){
      fill('#d09783');
      rect(buildX,buildY,buildW,600);
      for (i=0; (i+2)*20 < buildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ff9c7b');
          if (random(0,4)>2){
            fill('#d09783');
          }
          if (random(0,4)>2){
            fill('#864b38');
          }
          rect(buildX+10+20*i, buildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 4){
      fill('#c25bc1');
      rect(buildX,buildY,buildW,600);
      for (i=0; (i+2)*20 < buildW; i++){
        for (j=0; j<random(0,20); j++){
          fill('#ffffa1');
          if (random(0,5)>2){
            fill('#c25bc1');
          }
          if(random(0,5)>3){
            fill('#a1f1ff'); //ff00d9
          }
          rect(buildX+10+20*i, buildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 5){
      fill('#afb4b2');
      rect(buildX,buildY,buildW,600);
      for (i=0; (i+2)*20 < buildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffffa1');
          if (random(0,4)>2){
            fill('#afb4b2');
          }
          if (random(0,10)>8){
            fill('#818886');
          }
          rect(buildX+10+20*i, buildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 6){
      fill('#f8f9dd');
      rect(buildX,buildY,buildW,600);
      for (i=0; (i+2)*20 < buildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffd0b0');
          if (random(0,4)>2){
            fill('#f8f9dd');
          }
          if (random(0,4)>2){
            fill('#b6a9a4');
          }
          rect(buildX+10+20*i, buildY+10+50*j, 10, 40);
        }
      }
    }

  }

  // low back buildings produce
  for (i=0; i<random(5,13); i++){
    let lbuildX = random(-30,800);
    let lbuildY = random(300,400);
    let lbuildW = random(200,400);
    if(skyNum == 1){
      fill('#6a7a87');  //e9ebdb
      rect(lbuildX,lbuildY,lbuildW,500);
      //windows
      for (i=0; (i+2)*20 < lbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffd9ad'); // 연파랑 c2d6e2 //연 주황 ffd9ad
          if (random(0,10)>8){
            fill('#675752');
          }
          if (random(0,10)>8){
            fill('#6a7a87');
          }
          rect(lbuildX+10+20*i, lbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 2){
      fill('#6b8ea2');
      rect(lbuildX,lbuildY,lbuildW,500);
      for (i=0; (i+2)*20 < lbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#9ee6fd');
          if (random(0,4)>2){
            fill('#6b8ea2');
          }
          if (random(0,4)>2){
            fill('#5c7989');
          }
          rect(lbuildX+10+20*i, lbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 3){
      fill('#d09783');
      rect(lbuildX,lbuildY,lbuildW,500);
      for (i=0; (i+2)*20 < lbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ff9c7b');
          if (random(0,4)>2){
            fill('#d09783');
          }
          if (random(0,4)>2){
            fill('#864b38');
          }
          rect(lbuildX+10+20*i, lbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 4){
      fill('#c25bc1');
      rect(lbuildX,lbuildY,lbuildW,500);
      for (i=0; (i+2)*20 < lbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffffa1');
          if (random(0,5)>2){
            fill('#c25bc1');
          }
          if(random(0,5)>3){
            fill('#a1f1ff'); //ff00d9
          }
          rect(lbuildX+10+20*i, lbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 5){
      fill('#afb4b2');
      rect(lbuildX,lbuildY,lbuildW,500);
      for (i=0; (i+2)*20 < lbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffffa1');
          if (random(0,4)>2){
            fill('#afb4b2');
          }
          if (random(0,10)>8){
            fill('#818886');
          }
          rect(lbuildX+10+20*i, lbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 6){
      fill('#f8f9dd');
      rect(lbuildX,lbuildY,lbuildW,500);
      for (i=0; (i+2)*20 < lbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffd0b0');
          if (random(0,4)>2){
            fill('#f8f9dd');
          }
          if (random(0,4)>2){
            fill('#b6a9a4');
          }
          rect(lbuildX+10+20*i, lbuildY+10+50*j, 10, 40);
        }
      }
    }
  }


  // bridge back
  if (random(0,10)>6){
    let brX =random(-100,0);
    let brY = 360;
    bridgeCheck = 1;
    noFill();
    strokeJoin(MITER);
    if(skyNum == 1){
      stroke('#2f3137'); 
    }else if(skyNum == 2){
      stroke('#5e7777');
    }else if(skyNum == 3){
      stroke('#3f2a21');
    }else if(skyNum == 4){
      stroke('#452646');
    }else if(skyNum == 5){
      stroke('#2a312e');
    }else if(skyNum == 6){
      stroke('#424242');
    }

    push();
    scale(1.5);
    for (i=0; i<11; i++){
      strokeWeight(5);
      line(brX,brY,brX,brY+40);
      strokeWeight(3);
      line(brX+10,brY+10,brX+10,brY+40);
      line(brX+20,brY+19,brX+20,brY+40);
      line(brX+30,brY+22,brX+30,brY+40);
      line(brX+40,brY+22,brX+40,brY+40);
      line(brX+50,brY+19,brX+50,brY+40);
      line(brX+60,brY+10,brX+60,brY+40);
      line(brX,brY+40,brX+70,brY+40);
      beginShape();
      vertex(brX, brY);
      bezierVertex(brX+25, brY+30, brX+50, brY+30, brX+70, brY);
      endShape();
      brX += 70;
    }
    pop();
    noStroke();
  }

  // front buildings produce
  for (i=0; i<random(8,15); i++){
    let fbuildX = random(-30,800);
    let fbuildY = random(120,250);
    let fbuildW = random(250,300);

    if(skyNum == 1){
      fill('#353230'); 
      rect(fbuildX,fbuildY,fbuildW,500);
  //windows
      for (i=0; (i+2)*20 < fbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#6a7a87');
          if (random(0,7)>5){
            fill('#353230');
          }
          if (random(0,7)>5){
            fill('#a54829'); //a54829
          }
          if (random(0,7)>5){
            fill('#6a7a87'); //a54829
          }
          rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 2){
      fill('#d7dbdd');
      rect(fbuildX,fbuildY,fbuildW,500);
  //windows
      for (i=0; (i+2)*20 < fbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#eafffb');
          if (random(0,4)>2){
            fill('#5c7989');
          }
          if (random(0.5)>3){
            fill('#d7dbdd')
          }
          rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 3){
      fill('#5f463d');
      rect(fbuildX,fbuildY,fbuildW,500);
        //windows
      for (i=0; (i+2)*20 < fbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffffa1');
          if (random(0,4)>2){
            fill('#6a7a87');
          }
          rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 4){
      fill('#2c2a2c');
      rect(fbuildX,fbuildY,fbuildW,500);
      //windows
      for (i=0; (i+2)*20 < fbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffffa1');
          if (random(0,4)>2){
            fill('#6a7a87');
          }
          if (random(0,10)>8){
            fill('#2c2a2c');
          }
          rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 5){
      fill('#5f6261');
      rect(fbuildX,fbuildY,fbuildW,500);
      //windows
      for (i=0; (i+2)*20 < fbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#ffffa1');
          if (random(0,4)>2){
            fill('#6a7a87');
          }
          rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
        }
      }
    }else if(skyNum == 6){
      fill('#8d8d81');
      rect(fbuildX,fbuildY,fbuildW,500);
      //windows
      for (i=0; (i+2)*20 < fbuildW; i++){
        for (j=0; j<random(0,11); j++){
          fill('#f8f9dd');
          if (random(0,4)>2){
            fill('#6a7a87');
          }
          rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
        }
      }
    }
  }

    // front low buildings produce
    for (i=0; i<random(8,10); i++){
      let fbuildX = random(-30,800);
      let fbuildY = random(400,450);
      let fbuildW = random(300,350);
  
      if(skyNum == 1){
        fill('#353230'); 
        rect(fbuildX,fbuildY,fbuildW,500);
    //windows
        for (i=0; (i+2)*20 < fbuildW; i++){
          for (j=0; j<random(0,11); j++){
            fill('#6a7a87');
            if (random(0,7)>5){
              fill('#353230');
            }
            if (random(0,7)>5){
              fill('#a54829'); //a54829
            }
            if (random(0,7)>5){
              fill('#6a7a87'); //a54829
            }
            rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
          }
        }
      }else if(skyNum == 2){
        fill('#d7dbdd');
        rect(fbuildX,fbuildY,fbuildW,500);
    //windows
        for (i=0; (i+2)*20 < fbuildW; i++){
          for (j=0; j<random(0,11); j++){
            fill('#eafffb');
            if (random(0,4)>2){
              fill('#5c7989');
            }
            if (random(0.5)>3){
              fill('#d7dbdd')
            }
            rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
          }
        }
      }else if(skyNum == 3){
        fill('#5f463d');
        rect(fbuildX,fbuildY,fbuildW,500);
          //windows
        for (i=0; (i+2)*20 < fbuildW; i++){
          for (j=0; j<random(0,11); j++){
            fill('#ffffa1');
            if (random(0,4)>2){
              fill('#6a7a87');
            }
            rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
          }
        }
      }else if(skyNum == 4){
        fill('#2c2a2c');
        rect(fbuildX,fbuildY,fbuildW,500);
        //windows
        for (i=0; (i+2)*20 < fbuildW; i++){
          for (j=0; j<random(0,11); j++){
            fill('#ffffa1');
            if (random(0,4)>2){
              fill('#6a7a87');
            }
            if (random(0,10)>8){
              fill('#2c2a2c');
            }
            rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
          }
        }
      }else if(skyNum == 5){
        fill('#5f6261');
        rect(fbuildX,fbuildY,fbuildW,500);
        //windows
        for (i=0; (i+2)*20 < fbuildW; i++){
          for (j=0; j<random(0,11); j++){
            fill('#ffffa1');
            if (random(0,4)>2){
              fill('#6a7a87');
            }
            rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
          }
        }
      }else if(skyNum == 6){
        fill('#8d8d81');
        rect(fbuildX,fbuildY,fbuildW,500);
        //windows
        for (i=0; (i+2)*20 < fbuildW; i++){
          for (j=0; j<random(0,11); j++){
            fill('#f8f9dd');
            if (random(0,4)>2){
              fill('#6a7a87');
            }
            rect(fbuildX+10+20*i, fbuildY+10+50*j, 10, 40);
          }
        }
      }
    }
  
  // bridge front
  if (bridgeCheck == 0){
    let brX =random(-100,0);
    let brY = 360;
    bridgeCheck = 1;
    noFill();
    strokeJoin(MITER);
    if(skyNum == 1){
      stroke('#2f3137'); 
    }else if(skyNum == 2){
      stroke('#5e7777');
    }else if(skyNum == 3){
      stroke('#3f2a21');
    }else if(skyNum == 4){
      stroke('#452646');
    }else if(skyNum == 5){
      stroke('#2a312e');
    }else if(skyNum == 6){
      stroke('#424242');
    }

    push();
    scale(1.5);
    for (i=0; i<11; i++){
      strokeWeight(5);
      line(brX,brY,brX,brY+40);
      strokeWeight(3);
      line(brX+10,brY+10,brX+10,brY+40);
      line(brX+20,brY+19,brX+20,brY+40);
      line(brX+30,brY+22,brX+30,brY+40);
      line(brX+40,brY+22,brX+40,brY+40);
      line(brX+50,brY+19,brX+50,brY+40);
      line(brX+60,brY+10,brX+60,brY+40);
      line(brX,brY+40,brX+70,brY+40);
      beginShape();
      vertex(brX, brY);
      bezierVertex(brX+25, brY+30, brX+50, brY+30, brX+70, brY);
      endShape();
      brX += 70;
    }
    pop();
    noStroke();
  }

  // street light
  if (random(0,10)>3){
      let light =random(-100,0);
      noFill();
      strokeJoin(MITER);
      for (i=0; i<11; i++){
        strokeWeight(6);
        if(skyNum == 1){
          stroke('#2f3137'); 
        }else if(skyNum == 2){
          stroke('#5e7777');
        }else if(skyNum == 3){
          stroke('#3f2a21');
        }else if(skyNum == 4){
          stroke('#452646');
        }else if(skyNum == 5){
          stroke('#2a312e');
        }else if(skyNum == 6){
          stroke('#424242');
        }
        line(light,500,light,600);
        strokeWeight(3);
        line(light,500,light+10,500);
        noStroke();
        if(skyNum == 1){
          fill('#92c4cc'); 
        }else if(skyNum == 2){
          fill('#a5a7a8');
        }else if(skyNum == 3){
          fill('#ffea8d');
        }else if(skyNum == 4){
          fill('#ffffe5');
        }else if(skyNum == 5){
          fill('#ffff89');
        }else if(skyNum == 6){
          fill('#ffffce');
        }
        rect(light+2,502,8,3);
        light += 247;
      }
  }  

  // street electricity
  if (random(0,10)>3){
    let elec =random(-100,0);
    noFill();
    strokeJoin(MITER);
    if(skyNum == 1){
      stroke('#2f3137'); 
    }else if(skyNum == 2){
      stroke('#5e7777');
    }else if(skyNum == 3){
      stroke('#3f2a21');
    }else if(skyNum == 4){
      stroke('#452646');
    }else if(skyNum == 5){
      stroke('#2a312e');
    }else if(skyNum == 6){
      stroke('#424242');
    }

    for (i=0; i<11; i++){
      strokeWeight(10);
      line(elec,450,elec,600);
      strokeWeight(3);
      line(elec-10,450,elec+10,450);
      line(elec-10,460,elec+10,460);
      line(elec-10,470,elec+10,470);
      strokeWeight(2);
      beginShape();
      vertex(elec, 450);
      bezierVertex(elec+60, 480, elec+80, 480, elec+150, 450);
      endShape();
      push();
      translate(0,10);
      beginShape();
      vertex(elec, 450);
      bezierVertex(elec+60, 480, elec+80, 480, elec+150, 450);
      endShape();
      pop();
      push();
      translate(0,17);
      beginShape();
      vertex(elec, 450);
      bezierVertex(elec+60, 480, elec+80, 480, elec+150, 450);
      endShape();
      pop();
      elec += 150;
    }
  }

  //snow rain
  if(skyNum == 5){
    stroke('#e2e7e7');
    strokeWeight(1);
      for(i=0; i<300; i++){
        let rainX = random(0,900);
        let rainY = random(0,600);
        line(rainX, rainY, rainX, rainY + 10);
      }
    }

  if(skyNum == 6){
    stroke('rgba(255,255,255,0.7)');
      for(i=0; i<200; i++){
        let snowX = random(0,900);
        let snowY = random(0,600);
        strokeWeight(random(1,10));
        point(snowX,snowY);
        }
      }

      //filter
  if(skyNum == 1){
    fill('rgba(165,183,198,0.2)'); 
  }else if(skyNum == 2){
    fill('rgba(248,246,182,0.1)');
  }else if(skyNum == 3){
    fill('rgba(244,158,136,0.05)');
  }else if(skyNum == 4){
    fill('rgba(152,167,213,0.1)');
  }else if(skyNum == 5){
    fill('rgba(142,184,184,0.3)');
  }else if(skyNum == 6){
    fill('rgba(240,248,248,0.2)');
  }
  noStroke();
  rect(0,0,900,600);
  
}