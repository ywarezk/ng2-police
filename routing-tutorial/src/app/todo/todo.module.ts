import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoSearchComponent } from '../todo-search/todo-search.component';
import {TodoRoutingModule} from './todo-routing/todo-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  declarations: [TodoListComponent, TodoItemComponent, TodoSearchComponent]
})
export class TodoModule { }
