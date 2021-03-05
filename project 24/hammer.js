class Hammer {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      var Pos1 =this.body.position;
      var angle = this.body.angle;
      push();
      translate(Pos1.x, Pos1.y);
      rotate(angle);
      rectMode(CENTER);
      fill("gray");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };