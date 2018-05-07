

function setLoading(isLoading) {
    return {
        type: 'SET_LOADING',
        payload: isLoading
    }
}

function setTodoItems(items) {
    return {
        type: 'SET_TODO_ITEMS',
        payload: items
    }
}