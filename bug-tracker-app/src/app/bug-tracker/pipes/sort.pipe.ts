import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'sort'
})
export class SortPipe implements PipeTransform{
	transform(data : any[], attrName : string) : any[] {
		if (!attrName)
			return data;
		let comparer = getComparerFor(attrName);
		data.sort(comparer);
		return data;
	}
}

interface IComparer{
	(item1 : any, item2 : any) : number
}

function getComparerFor(attrName : string) : IComparer{
	return function(item1 : any, item2 : any) : number {
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}