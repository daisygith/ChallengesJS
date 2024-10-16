class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }


    rectangleArea(){
        console.log(`Width: ${this.width}` + " ; " + `Height: ${this.height}`);
        return this.width+this.height;
    }

    rectanglePerimeter(){
        console.log(`Width: ${this.width}` + " ; " + `Height: ${this.height}`);
        return 2*(this.width+this.height);
    }
}

const rectangle = new Rectangle(10,20);
const rectangle2 = new Rectangle(50,17);


console.log('Rectangle 1: ');
const sum = rectangle.rectangleArea();
console.log(`Sum: ${sum}`);
const perimeter = rectangle.rectanglePerimeter();
console.log(`Perimeter ${perimeter}`);

console.log('Rectangle 2: ');
const sum2 = rectangle2.rectangleArea();
console.log(`Sum: ${sum2}`);
const perimeter2 = rectangle2.rectanglePerimeter();
console.log(`Perimeter ${perimeter2}`);