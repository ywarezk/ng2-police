import { TodoItem } from "../../../models/todo-item";
import { SetLoading, SetTasks, TodoActions, TodoActionsTypes } from "./todo.actions";


/**
 * how our section of the todo state looks like
 */
export interface ITodo {
    todoItems: TodoItem[],
    isLoadingFromServer: boolean;
}

const initialState: ITodo = {
    isLoadingFromServer: false,
    todoItems: []
}

export function todoReducer(
    state: ITodo = initialState, 
    action: TodoActions): ITodo {
    switch(action.type) {
        case TodoActionsTypes.SET_LOADING:
            return {
                ...state, isLoadingFromServer: action.payload    
            } as ITodo;
        case TodoActionsTypes.SET_TASKS:
            return {
                ...state, todoItems: action.payload
            } as ITodo
        default:
            return state;
    }        
}

