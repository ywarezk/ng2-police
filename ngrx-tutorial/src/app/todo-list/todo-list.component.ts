import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAppState } from '../app-store/reducers';
import { Store } from '@ngrx/store';
import { TodoItem } from '../../models/todo-item';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
    public tasks$: Observable<TodoItem[]> = this._store.select((state: IAppState) => state.todo.todoItems)

  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
  }

}
