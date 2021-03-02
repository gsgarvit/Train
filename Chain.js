class Chain{  
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
        //this.Chain1 = loadImage('sprites/Chain1.png');
       
        this.Chain =Constraint.create(options);
        World.add(world, this.Chain);
    }
   
   show(){
       // image(this.Chain1,200,20);
        
     
            var pointA = this.Chain.bodyA.position;
            var pointB = this.Chain.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}