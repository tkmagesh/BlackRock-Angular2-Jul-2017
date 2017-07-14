import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	result : number = 0;
	calculator : CalculatorModel = new CalculatorModel();

	onAddClick(value1, value2){
		this.calculator.operand1 = parseInt(value1, 10);
		this.calculator.operand2 = parseInt(value2, 10);
		this.calculator.add();
		this.result = this.calculator.result;
	}
	onSubtractClick(value1, value2){
		this.calculator.operand1 = parseInt(value1, 10);
		this.calculator.operand2 = parseInt(value2, 10);
		this.calculator.subtract();
		this.result = this.calculator.result;
	}
	onMultiplyClick(value1, value2){
		this.calculator.operand1 = parseInt(value1, 10);
		this.calculator.operand2 = parseInt(value2, 10);
		this.calculator.multiply();
		this.result = this.calculator.result;
	}
	onDivideClick(value1, value2){
		this.calculator.operand1 = parseInt(value1, 10);
		this.calculator.operand2 = parseInt(value2, 10);
		this.calculator.divide();
		this.result = this.calculator.result;
	}

}