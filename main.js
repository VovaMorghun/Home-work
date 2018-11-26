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

class Circle {
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

class triangle {
    constructor(a,b,c){        
        this.a  = a;
        this.b = b;
        this.c = c;
    }
    
    square(){        
        console.log("triangle square = " + ( (this.a/2) * this.b))    
    }

    perimeter(){       
        console.log("triangle perimeter = " + (this.a + this.b + this.c))
    } 
}

var s = new Shape(2,3)
s.square()
s.perimeter()

var circl = new Circle(6);

circl.square()
circl.perimeter()





// class Persone {
//     constructor(firstName, age){
//     this.firstName = firstName;
//      this._age = age
//     // var age = age
//     // this.getAge = function(){
//     //       return age
//     // } 
//     }
//     walk() {
//           console.log('I am walking !');
//     };
    
//     sayHello() {
//           console.log("Hello , i'm" + this.firstName);
//     };
// };

// class Student extends Persone{
//     constructor(firstName , age, subject){
//         super(firstName, age);  //ссілка на наследуемій класс
//         this.subject = subject
//     }
//     sayHello (){
//           console.log("Hello , i'm" + this.firstName + "i'm studing" + this.subject)
//     } 
// }






// var user1 = new Student('John' ,43, 'FEP')

// console.log(user1)