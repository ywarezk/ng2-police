import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { IAppState } from '../app-store/reducers';
import { Store } from '@ngrx/store';
import { TodoItem } from '../../models/todo-item';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
//   changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements DoCheck {
    public tasks$: Observable<TodoItem[]> = this._store.select((state: IAppState) => state.todo.todoItems)
    public tasks: number[] = [];

  constructor(private _store: Store<IAppState>, private _cd: ChangeDetectorRef) { }

  ngOnInit() {
    //   this.tasks$.subscribe((todoItems: TodoItem[]) => {
    //       this.tasks = todoItems;
    //       this._cd.detectChanges();
    //   });
    setTimeout(() => {
        console.log('timer activates cd');
    }, 1000);
    this._cd.detectChanges();
  }

    public ngDoCheck() {
        this.tasks = [1];
        this._cd.detectChanges();
    }





}
