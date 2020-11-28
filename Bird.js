class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = []; //making an empty array to store all the positions of the bird
    this.smokeImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){ //smoke image should be added if the bird is flying and is to the right of the catapult
      var pos = this.body.position; 
      var position = [pos.x, pos.y]; //making a new array to store the current x and y position of the bird
      this.trajectory.push(position); //adding the position array into the trajectory array
    }
    
    for(var i = 0; i<this.trajectory.length; i++){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    } //looping through the entire trajectory array and drawing the smoke image at every point
    super.display();
  }
}
