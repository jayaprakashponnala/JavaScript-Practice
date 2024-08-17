// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
class Rectangle {
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    area(){
        console.log("area of rectangle is : "+this.width*this.height);
    }
    perimeter(){
        console.log("perimeter of rectangle is : "+2*(this.width+this.height));
    }
}
const obj1=new Rectangle(10,20);
obj1.area();
obj1.perimeter();