import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Practice1Component } from './practice1.component';
import { Todo1Component } from './todo1/todo1.component';
import { TodoLayoutComponent } from './todo/todo-layout/todo-layout.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoDataComponent } from './todo/todo-data/todo-data.component';

@NgModule({
  declarations: [
    AppComponent,
    Practice1Component,
    Todo1Component,
    TodoLayoutComponent,
    TodoListComponent,
    AddTodoComponent,
    TodoDataComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
