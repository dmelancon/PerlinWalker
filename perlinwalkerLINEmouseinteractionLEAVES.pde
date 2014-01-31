Walker w;
void setup() {
  size(800, 800);
  smooth();
  background(255);
  w = new Walker();
}

void draw() {


  if (mousePressed == true) {
    w.randomize();
     w.renderMouse();
  }
  else {
    w.walk();
     w.render();
  }
 
}

