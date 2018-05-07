

store.dispatch(setLoading(true));
fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((res) => {
    return res.json();
}).then((todoItems) => {
    store.dispatch(setTodoItems(todoItems));
    store.dispatch(setLoading(false));
});