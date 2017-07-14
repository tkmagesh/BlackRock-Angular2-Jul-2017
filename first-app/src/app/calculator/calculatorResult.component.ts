import { Component, Input } from '@angular/core';

@Component({
	selector : 'calculator-result',
	template : '<div>{{data}}</div>'
})
export class CalculatorResultComponent{

	@Input()
	data : any = '[some dummy result]';
}