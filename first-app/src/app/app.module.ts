import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { CalculatorOneComponent } from './calculator/calculatorOne.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    CalculatorOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
