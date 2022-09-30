import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosService } from './services/todos.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './components/delete-todo/delete-todo.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodosListComponent,
    AddTodoComponent,
    ModalComponent,
    EditTodoComponent,
    DeleteTodoComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
