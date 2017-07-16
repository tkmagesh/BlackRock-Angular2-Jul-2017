import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import { IBug } from '../models/IBug';


import {BugOperations} from './BugOperations.service';

@Injectable()
export class BugServer{
	constructor(private http : Http, private bugOperations : BugOperations){

	}
	getAll() : Observable<IBug[]>{
		return this.http
			.get('http://localhost:3000/bugs')
			.map(response => response.json());
	}

	addNew(bugName){
		let newBugData : IBug = this.bugOperations.createNew(0, bugName);
		return this.http
			.post('http://localhost:3000/bugs', newBugData)
			.map(response => response.json())
	}

	toggle(bugToToggle){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.http
			.put(`http://localhost:3000/bugs/${toggledBug.id}`, toggledBug)
			.map(response => response.json());
	}
	
	remove(){

	}
}