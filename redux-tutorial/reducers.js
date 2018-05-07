
const initialState = {
    isLoadingFromServer: false,
    todoItems: []
}


function todoReducer(state = initialState, action) {
    switch(action.type) {
        case 'SET_LOADING':
            // state['isL'] // wrong cause state is immutable
            return {
                ...state, isLoadingFromServer: action.payload
            }
        case 'SET_TODO_ITEMS':
            return {
                ...state, todoItems: action.payload
            }
        default:
            return state;
    }
}