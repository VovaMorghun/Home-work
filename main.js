const pi = 3.14;

class Shape {
    constructor( width , height , angle ){
          this.width = width;
          this.height = height;
          this.angle = angle;
          
    };
    square(){
          console.log("square = " + (this.width * this.height))
    };
    
    perimeter(){
          console.log("perimeter = " + (this.width + this.height) * 2)
    }
}

class Circle  {
    constructor(diameter){
       this.diameter = diameter;
    }
    
    square(){        
        console.log("Circl square = " + Math.pow(( pi * (this.diameter/2)) , 2))        
    }

    perimeter(){       
        console.log("Circl perimeter = " + (2 * pi * (this.diameter/2)))
    } 
}

class Triangle extends Shape {
    constructor(width,height,c){
        super(width , height)        
        this.c = c;
    }
    
    square(){        
        console.log("triangle square = " + ( (this.width/2) * this.height))    
    }

    perimeter(){       
        console.log("triangle perimeter = " + (this.width + this.height + this.c))
    } 
}

var s = new Shape(2,3)
s.square()
s.perimeter()

var circl = new Circle(6);
circl.square()
circl.perimeter()

var triangle = new Triangle (4 , 7 , 8);
triangle.square()
triangle.perimeter()






