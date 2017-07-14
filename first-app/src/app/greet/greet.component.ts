import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	template : `
		<div>
		    <label for="">Name :</label>
		    <input type="text" #txtUserName>

		    <input type="button" value="Greet" (click)="onButtonClick(txtUserName.value)">
		  </div>
		  <h1>
		    {{message}}
		  </h1>
	`
})
export class GreetComponent{
	//title = 'My App';
  message : string = '';

  onButtonClick(username){
  	this.message = `Hi ${username}, Welcome to My App!`;
  }
}