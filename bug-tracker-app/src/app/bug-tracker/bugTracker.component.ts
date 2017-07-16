import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './services/BugOperations.service';
import { BugStorage } from './services/BugStorage.service';



import add from './utilities';
import * as utils from './utilities';
console.log(utils);

console.log(add(100,200));


/*
window.localStorage (object)
===================
- key/value store
- both key and value must be strings
- use JSON.stringify & JSON.parse for searialization and deserialization of objects to strings
- follows Same Origin Policy
- APIs
------
	* setItem(key, value)
	* getItem(key) returns value
	* removeItem(key)
	* clear()
	* key(index) return key at index location
	* length

*/
@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent{
	newBugName : string = '';

	bugs : IBug[] = [];

	constructor(private bugStorage : BugStorage){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateClick(){
		let newBug : IBug = this.bugStorage.addNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		/*for(let index = this.bugs.length -1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}*/
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => this.bugStorage.remove(bug));
			
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}


}







