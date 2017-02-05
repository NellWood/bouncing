function setup() {
  resizeCanvas(300,300);
  background(220);
}
var position = new p5.Vector(5, 130);
var vector = new p5.Vector(10,10);
function draw() {
  position.add(vector);
  ellipse(position.x, position.y, 10, 10); 
  
  if(position.y > height) {
    vector.y = vector.y * -1;
  }
    
  if(position.x > width) {
    vector.x = vector.x * -1;
  }
  
  if(position.y < 0) {
    vector.y = vector.y * -1;
  }
  
  if(position.x < 0) {
    vector.x = vector.x * -1;
  }
  
}



