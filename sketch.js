var w;

function setup() {
  createGraphics(1000,400);
  background(255);
  smooth();
  this._frameRate = 60;
  w = new Walker();

};

function draw() {
  if (this.mousePressed == true ){

    w.randomize();
     w.renderMouse();
  }
  else {

     w.walk();
     w.render();
  }
  };
  
