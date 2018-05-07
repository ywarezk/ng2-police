import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  searchChanged(event) {
    const searchString: string = event.target.value;
    this._router.navigateByUrl(`/todos?search=${searchString}`);
    // this._router.navigateByUrl('/todos/?search=' + searchString);
  }

}
