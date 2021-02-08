class Stone {
    constructor(x,y,radius){
    var options={
     density:1.2,
     restitution:0,
     friction:1,
     isStatic:false
     }
     this.body = Bodies.circle(x, y,radius/2,options);
     this.body=loadImage("images/stone.png")
        this.radius = radius;
        World.add(world, this.body);

      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER)
        image( this.image,0, 0, this.radius*2,this.radius*2);
        pop();
      }
         
       }
        
      
     
    

