import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from '../../todo-list/todo-list.component';
import { TodoItemComponent } from '../../todo-item/todo-item.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: TodoListComponent},
            {path: ':id', component: TodoItemComponent},
        ])
    ],
    exports: [RouterModule]
})
export class TodoRoutingModule {

}