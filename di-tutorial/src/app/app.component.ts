import { Component, Inject } from '@angular/core';
import { GreetingsService } from './greetings.service';
import { Observable } from 'rxjs/Observable';
import { ServerService } from './server.service';
import { SERVER_URL } from './server-url.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = 'app';
  greetings$: Observable<string[]>

  constructor(
      @Inject(SERVER_URL) private _serverUrl: string,
      private _greetingService: GreetingsService, 
      private _serverService: ServerService) {

  }

  public ngOnInit() {
      this.greetings$ = this._greetingService.greetings$;
      setTimeout(() => {
          this._greetingService.greetings$.next(['asdf', 'asdf', 'asdf']);
      }, 1000);
      console.log(this._serverService.url);
      console.log(this._serverUrl);
  }
}
