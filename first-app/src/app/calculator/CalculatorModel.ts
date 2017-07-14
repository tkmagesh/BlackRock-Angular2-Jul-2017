export class CalculatorModel{
	result : number = 0;
	operand1 : number = 0;
	operand2 : number = 0;

	add(){
		this.result = this.operand1 + this.operand2;
	}
	subtract(){
		this.result = this.operand1 - this.operand2;
	}
	multiply(){
		this.result = this.operand1 * this.operand2;
	}
	divide(){
		this.result = this.operand1 / this.operand2;
	}
}