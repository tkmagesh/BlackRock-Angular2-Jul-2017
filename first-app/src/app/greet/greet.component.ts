import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<div>
		    <label for="">Name :</label>
		    <input type="text" [(ngModel)]="username">

		    <input type="button" value="Greet" (click)="onButtonClick()">
		  </div>
		  <h1>
		    {{message}}
		  </h1>
	`
})
export class GreetComponent{
	//title = 'My App';
  message : string = '';
  username : string = '';

  onButtonClick(){
  	this.message = `Hi ${this.username}, Welcome to My App!`;
  	this.username = '';
  }
}