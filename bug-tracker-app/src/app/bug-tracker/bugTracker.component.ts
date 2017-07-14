import { Component } from '@angular/core';
import { IBug } from './models/IBug';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent{
	newBugName : string = '';

	bugs : Array<IBug> = [];

	onCreateClick(){
		let newBug : IBug = {
			name : this.newBugName,
			isClosed : false
		};
		this.bugs.push(newBug);
	}

	onBugClick(bug){
		bug.isClosed = !bug.isClosed;
	}
}

