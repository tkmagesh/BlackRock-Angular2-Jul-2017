//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { UtilsModule } from './utils/utils.module';

//components
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

//pipes
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

//services
import { BugOperations } from './bug-tracker/services/BugOperations.service'
import { BugStorage } from './bug-tracker/services/BugStorage.service';
import { BugServer } from './bug-tracker/services/BugServer.service';
@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule,
    HttpModule
  ],
  providers: [
    BugOperations,
    BugStorage,
    BugServer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
