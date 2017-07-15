import { IBug } from '../models/IBug';

export class BugOperations{
	currentBugId : number = 0;
	
	createNew(bugName : string) : IBug {
		return {
			id : ++this.currentBugId,
			name : bugName,
			isClosed : false
		}
	}

	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}