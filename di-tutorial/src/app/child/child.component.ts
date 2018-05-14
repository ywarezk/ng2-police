import { Component, OnInit, Injector } from '@angular/core';
import { GreetingsService } from '../greetings.service';
import { Observable } from 'rxjs/Observable';
import { SERVER_URL } from '../server-url.token';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [GreetingsService]
})
export class ChildComponent implements OnInit {
    greetings$: Observable<string[]>

  constructor(private _greetingService: GreetingsService, private _injector: Injector) { }

  ngOnInit() {
    this.greetings$ = this._greetingService.greetings$;
    const serverUrl = this._injector.get(SERVER_URL);
  }

}
