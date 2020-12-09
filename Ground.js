class Ground{
    constructor(){
        var options = {
            isStatic : true,
        }

        //instead of this.body i have written this.ground
        this.ground = Bodies.rectangle(450,390,900,20,options);
        //this.width = width;
        //this.height = height;
        World.add(world,this.ground);

    }
    display(){
        var pos = this.ground.position;
        fill(64,45,38);
        rectMode(CENTER);
        rect(pos.x,pos.y,900,20);
        
    }
}