import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

import { BugOperations } from './bug-tracker/services/BugOperations.service'
@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BugOperations
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }