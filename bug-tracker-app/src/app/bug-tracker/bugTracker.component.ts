import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './services/BugOperations.service';

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

	constructor(public bugOperations : BugOperations){
		this.bugs.push(this.bugOperations.createNew('Server communication error'));
		this.bugs.push(this.bugOperations.createNew('Data integrity check failed'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
		this.bugs.push(this.bugOperations.createNew('Application is not responsive'));
	}

	onCreateClick(){
		let newBug : IBug = this.bugOperations.createNew(this.newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		/*for(let index = this.bugs.length -1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}*/
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}


}







