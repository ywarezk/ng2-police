

var ul = document.createElement('ul');
document.body.appendChild(ul);

store.subscribe(() => {
    for (const todoItem of store.getState().todoItems) {
        var li = document.createElement('li');
        li.textContent = todoItem.title;
        ul.appendChild(li);
    }
});