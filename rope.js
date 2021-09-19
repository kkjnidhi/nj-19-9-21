class rope
{
  constructor(body1, body2, pointA, pointB) 
  {
      this.pointA = pointA;
    this.pointB = pointB;

    var  options = {
     bodyA:body1,
     bodyB:body2,
     pointB:{x:this.pointA,y:this.pointB}
  
    };
    this.rope=Constraint.create({length:100,stiffness:0.1,bodyA:roof,bodyB:ball1})
    World.add(world,rope);
  }
     
      display() { 
        push()
     var pointA=this.rope.bodyA.position;
      var  pointB=this.rope.bodyB.position;
      strokeWeight(2);
      line( roof.position.x,roof.position.y,pointA.position,pointB.position)
      pop()
      }
}
