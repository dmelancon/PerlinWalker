function Walker(){
	this.loc = [];
	for ( var i=0; i<2000; i++) {
      this.loc[i] = new PVector(random(width), (height/2));
  }
	n = new Perlin();
}

Walker.prototype.render = function(){
	strokeWeight(.5);
	stroke(0);
	for(var i = 0; i<this.loc.length;i++){
		point(this.loc[i].x, this.loc[i].y);
	}
};

Walker.prototype.walk = function(){
	  for ( var i=0; i<this.loc.length; i++) {
      this.vel = new PVector(2*n.noise(this.loc[i].x * 0.02, this.loc[i].y*0.016 )-1, 2*n.noise(this.loc[i].x * 0.017, this.loc[i].y*0.011 )-1);
      // this.vel  = new Processing.PVector(1,1);
      this.loc[i].add(this.vel);
  }
};

Walker.prototype.randomize = function(){
	  for ( var i=0; i<this.loc.length; i++) {
	  	  if ( this.loc[i].y<(random((height/2)-90, (height/2)-70 ))) {
	  	  	this.vel = new Processing.PVector(random(-5, 5), random(-5, 5));
        this.loc[i].add(this.vel);
    }else{
    	 this.vel = new PVector(2*n.noise( this.loc[i].x * 0.02, this.loc[i].y*0.016 )-1, 2*n.noise( this.loc[i].x * 0.017, this.loc[i].y*0.011 )-1);

        this.loc[i].add(this.vel);
    }}
};

Walker.prototype.renderMouse = function(){
for ( var i=0; i<this.loc.length; i++) {
	if ( this.loc[i].y<(random((height/2)-90,(height/2)-70 ))) {
		strokeWeight(2);
          stroke(0, random(127, 255), 0);
          point(this.loc[i].x, this.loc[i].y);
}
}
};
