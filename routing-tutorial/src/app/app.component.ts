import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private _router: Router) {}

  public ngOnInit() {
    this._router.events
        .filter((event: Event) => event instanceof NavigationStart)
        .subscribe(() => {
            console.log('Navigation start');
        })
    // .subscribe((event: Event) => {
    //     if (event instanceof NavigationStart) {

    //     }
    // });
  }
}
