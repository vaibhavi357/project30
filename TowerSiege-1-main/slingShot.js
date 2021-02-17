class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //display the slingshot on the platform(static image)
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            // getthe clour to draw the line from colorzilla
            stroke(48,22,8);
            //to prevent the base of the rubber bad from being left behind when the bird s pulled infront of slingshot
            if (pointA.x<220) {
                //draw the rubber band ad display the base
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x-30,pointA.y-10,15,30);
                //make the rubber band thinner when stretched = rubberband effect
                strokeWeight(7);
            } 
            else {
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25,pointA.y-10,15,30);
                strokeWeight(3);
                }
            pop();
        }
    }
    
}