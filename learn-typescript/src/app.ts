for(let index=0; index<10; index++){

}
console.log(index);
const pi = 3.14;
pi = 2.0;
 
function add(x=10, y=20){
	return x + y;
}
console.log(add());
console.log(add(100));
console.log(add(undefined, 200));
console.log(add(100, 200));

//array destructuring
let numbers:Array<number> = [3,5,4,7,8];

//using the 'rest' operator
let [first, second, ...remaining] = numbers;
console.log(first, second);
console.log(remaining);

interface IEmployee{
	id : number,
	name : string,
	salary : number
};

//object destructuring
let emp : IEmployee = {
	id : 100,
	name : 'Magesh',
	salary : 10000
};
let {id, name} = emp;
console.log(id, name);


//
/*function sum(x,y){
	return x + y;
}

let sum = function(x,y){
	return x + y;
};

let sum = (x,y) => {
	return x + y;
};*/
//Arrow functions
let sum = (x,y) => x + y;

console.log(sum(100,200));

/*let evenNumbers = numbers.filter(function(n){
	return n % 2 === 0;
});*/

let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);


class Product{
	constructor(public id, public name, public cost){
		
	}

	display(){
		//let output = 'id=' + this.id + ', name=' + this.name + ', cost=' + this.cost;
		let output = `id=${this.id}, name=${this.name}, cost=${this.cost}`;
		console.log(output);
	}
}

let p1 = new Product(100, 'Pen', 20);
p1.display();
console.log(p1.id);

class StationaryProduct extends Product{
	public category : string;

	constructor(public id, public name, public cost){
		super(id, name, cost);
		this.category = 'stationary';
	}
}

let scribblepad = new StationaryProduct(201, 'Scribble Pad', 30);
console.log(scribblepad);

let multiLineStr = `
This is line 1
This is line 2
This is line 3
`;

console.log(multiLineStr);
