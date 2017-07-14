import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	calculator : CalculatorModel = new CalculatorModel();

	operation : string = '';

	calculate(){
		switch (this.operation) {
			case 'add':
				this.calculator.add();
				break;
			case 'subtract':
				this.calculator.subtract();
				break;
			case 'multiply':
				this.calculator.multiply();
				break;
			case 'divide':
				this.calculator.divide();
				break;
		}
	}
}