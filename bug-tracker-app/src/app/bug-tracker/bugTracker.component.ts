import { Component } from '@angular/core';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent{
	newBugName : string = '';

	bugs : Array<string> = [];

	onCreateClick(){
		this.bugs.push(this.newBugName);
	}
}