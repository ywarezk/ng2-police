import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyClassDirective } from './my-class.directive';
import { MyNgIfDirective } from './my-ng-if.directive';
import { MyForDirective } from './my-for.directive';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    MyClassDirective,
    MyNgIfDirective,
    MyForDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
