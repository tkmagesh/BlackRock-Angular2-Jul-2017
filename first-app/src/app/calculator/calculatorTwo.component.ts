import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	calculator : CalculatorModel = new CalculatorModel();
}