import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperations } from './services/BugOperations.service';
import { BugStorage } from './services/BugStorage.service';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BugServer } from './services/BugServer.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.style.css']
})
export class BugTrackerComponent{
	newBugName : string = '';
	bugSortOrder : string = '';
	isDescending : boolean = false;
	bugs : IBug[] = [];

	constructor(private bugServer : BugServer, private http : Http, private bugOperations : BugOperations){
		
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onCreateClick(){
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.bugs = [...this.bugs, newBug]);
		
	}

	onBugClick(bugToToggle){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => 
				this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		this
			.bugs
			.filter(bug => bug.isClosed)
			.forEach(bug => 
				this.http
					.delete(`http://localhost:3000/bugs/${bug.id}`)
					.subscribe()
			);
			
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}


}







