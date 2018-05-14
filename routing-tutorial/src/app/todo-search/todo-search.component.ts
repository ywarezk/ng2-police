import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
    public search: BehaviorSubject<string> = new BehaviorSubject('');


  constructor(private _router: Router) { }

  ngOnInit() {
      this.search
        .debounceTime(1000)
        .distinctUntilChanged()
        .subscribe((searchFiltered: string) => {
            this._router.navigateByUrl(`/todos?search=${searchFiltered}`);
        });
  }

  searchChanged(event) {
    const searchString: string = event.target.value;
    this.search.next(searchString);
  }

}
