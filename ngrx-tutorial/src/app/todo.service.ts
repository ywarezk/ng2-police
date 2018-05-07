import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { IAppState } from "./app-store/reducers";
import { ITodoItem, TodoItem } from "../models/todo-item";
import { Observable } from "rxjs/Observable";
import {SetTasks} from './app-store/todo/todo.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable()
export class TodoService {
    constructor(
        private _http: HttpClient, 
        private _store: Store<IAppState>) {}

    /**
     * get tasks from server
     * update the state with tasks
     */
    getAllTasks(): Observable<TodoItem[]> {
        return this._http
            .get<ITodoItem[]>('https://nztodo.herokuapp.com/api/task/?format=json')
            .map((jsonArray: ITodoItem[]) => jsonArray.map((json: ITodoItem) => new TodoItem(json)))
            .do((todoItems: TodoItem[]) => this._store.dispatch(new SetTasks(todoItems)))
    }


}