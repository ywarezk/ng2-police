/**
 * actions that relate to our todo applications
 */

import {Action} from '@ngrx/store';
import { ITodoItem } from '../../../models/todo-item';

//  function setLoading(isLoading) {
//     return {
//         type: 'xcvxc',

//     }
//  }

export class TodoActionsTypes {
    static SET_LOADING = '[Todo] SET_LOADING';
    static SET_TASKS = '[Todo] SET_TASKS';
}

export class SetLoading implements Action {
    public type = TodoActionsTypes.SET_LOADING;

    constructor(public payload: boolean) {}
}

export class SetTasks implements Action {
    public type = TodoActionsTypes.SET_TASKS;

    constructor(public payload: ITodoItem[]) {}
}

export type TodoActions = SetLoading | SetTasks;