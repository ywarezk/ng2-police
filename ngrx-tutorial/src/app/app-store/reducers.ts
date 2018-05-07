import { ITodo, todoReducer } from "./todo/todo.reducer";
import { ActionReducerMap } from "@ngrx/store";


export interface IAppState {
    todo: ITodo,
    // settings: ISettings
}

export let appStoreReducers: ActionReducerMap<IAppState> = {
    todo: todoReducer
    // settings: settingsReducer
}