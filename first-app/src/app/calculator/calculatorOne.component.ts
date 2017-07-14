import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	//result : number = 0;
	calculator : CalculatorModel = new CalculatorModel();
	
	onAddClick(){
		
		this.calculator.add();
	}
	onSubtractClick(){
		
		this.calculator.subtract();
	}
	onMultiplyClick(){
		
		this.calculator.multiply();
	}
	onDivideClick(){
		
		this.calculator.divide();
	}

}