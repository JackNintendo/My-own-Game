//this Class is a child Class or subClass
//it inherits all the properties from the parent Class (the base Class)
class SpaceShip extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/SpaceShip.png");
  }
  display(){
    this.body.position.x = x;
    this.body.position.y = y;
    super.display();
  }
}