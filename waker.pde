class Walker {
  PVector[] loc = new PVector[2000];
  PVector vel;


  Walker() {
    for ( int i=0; i<loc.length; i++) {
      loc[i] = new PVector(random(width), height/2);
    }
  }
  void render() {
    strokeWeight(1);

    stroke(0);
    for ( int i=0; i<loc.length; i++) {
      point(loc[i].x, loc[i].y);
    }
  }
  void walk() {
    for ( int i=0; i<loc.length; i++) {

      vel = new PVector(2*noise( loc[i].x * 0.02, loc[i].y*0.016 )-1, 2*noise( loc[i].x * 0.017, loc[i].y*0.011 )-1);

      loc[i].add(vel);
    }
  }
  void randomize() {
    for ( int i=0; i<loc.length; i++) {
       if ( loc[i].y<(random((height/2)-90,(height/2)-70 ))) {
        vel = new PVector(random(-5, 5), random(-5, 5));
        loc[i].add(vel);
      }
      else {
        vel = new PVector(2*noise( loc[i].x * 0.02, loc[i].y*0.016 )-1, 2*noise( loc[i].x * 0.017, loc[i].y*0.011 )-1);

        loc[i].add(vel);
      }
    }
  }
    void renderMouse() {

      for ( int i=0; i<loc.length; i++) {
        if ( loc[i].y<(random((height/2)-90,(height/2)-70 ))) {
          strokeWeight(4);
          stroke(0, random(127, 255), 0);
          point(loc[i].x, loc[i].y);
        }
        else {
          strokeWeight(1);
          stroke(0);
          point(loc[i].x, loc[i].y);
        }
      }
    }
  }

