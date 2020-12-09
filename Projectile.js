class Projectile{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 10,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world,this.body);

    }
    release(){
        this.body.bodyA = niull;

    }
    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            
        }
    }
}