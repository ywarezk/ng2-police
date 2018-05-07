

export interface ITodoItem {
    title: string;
    description: string;
}

export class TodoItem implements ITodoItem {
    public title = '';
    public description = '';

    constructor(json: ITodoItem) {
        this.title = json.title;
        this.description = json.description;
    }
}