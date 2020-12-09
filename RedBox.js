class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(233,199,121);
        super.display();
    }
}