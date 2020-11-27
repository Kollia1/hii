class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options)
        this.radius=30;
        World.add(world,this.body)
    }
    fly(){
        this.body.isStatic=false;
        
    } 
    display(){
        
        push()
 
        
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y+20,this.radius/2,this.radius/2)
        pop()
    }
}