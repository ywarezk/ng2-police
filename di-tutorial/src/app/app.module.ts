import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GreetingsService } from './greetings.service';
import { ServerService } from './server.service';
import { serverFactory } from './server.factory';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SERVER_URL } from './server-url.token';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
      // GreetingsService,
      {provide: GreetingsService, useClass: GreetingsService},
      {provide: ServerService, deps: [HttpClient], useFactory: serverFactory},
      {provide: SERVER_URL, useValue: environment.serverUrl}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
