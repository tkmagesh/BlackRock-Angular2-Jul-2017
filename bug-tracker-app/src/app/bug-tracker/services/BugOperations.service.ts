import { IBug } from '../models/IBug';

export class BugOperations{
	//currentBugId : number = 0;
	
	createNew(id : number, bugName : string) : IBug {
		return {
			id : id,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		}
	}

	toggle(bug : IBug) : IBug {
		return {...bug, isClosed : !bug.isClosed};
	}
}