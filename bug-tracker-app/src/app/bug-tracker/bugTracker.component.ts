import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './services/BugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent{
	newBugName : string = '';

	bugs : IBug[] = [];

	constructor(public bugOperations : BugOperations){
		
	}

	onCreateClick(){
		let newBug : IBug = this.bugOperations.createNew(this.newBugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length -1; index >= 0; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index, 1);
		}
	}

	/*getClosedCount(){
		let closedCount = 0;
		for(let index=0, bugsLength = this.bugs.length; index < bugsLength; index++){
			if (this.bugs[index].isClosed)
				++closedCount;
		}
		return closedCount;
	}*/

	/*getClosedCount(){
		return this.bugs.filter(function(bug){
			return bug.isClosed;
		}).length;
	}*/

	getClosedCount(){
		return this.bugs.reduce<number>((prevResult : number, bug : IBug) => bug.isClosed ? ++prevResult : prevResult, 0);
	}


}







