var r=0;

var x;
var y;

function setup(){
    createCanvas(720,480);
    x=100;
    y=100;
}

function draw(){
    background(r,100,100);
    
 
    r=r+1;
    r=r%255;

    x=x+1;
    y=y+1;
    
    x=x%720;
    y=y%480;

    square(x,y,100);
    square(x,y,-100);
//square(x,y,200);
//square(x,y,70);
}

function draw(){
  background(r,100,100);
  

  r=r+1;
  r=r%255;

  x=x+1;
  y=y+1;
  
  x=x%720;
  y=y%480;

  circle(x,y,100);
  square(x,y,-100);
circle(x,y,200);
//square(x,y,70);
}

