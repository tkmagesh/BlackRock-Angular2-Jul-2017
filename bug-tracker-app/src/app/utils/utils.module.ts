import { NgModule } from '@angular/core';

//pipes
import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';

const ALL_PIPES = [
	TrimTextPipe,
	SortPipe
];

@NgModule({
	declarations : ALL_PIPES,
	imports : [],
	providers : [],
	exports : ALL_PIPES
})
export class UtilsModule{

}