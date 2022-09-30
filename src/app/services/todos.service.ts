import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Todo } from '../interfaces';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  todos: Todo[] = []

  todo: Todo
  newTodo: Todo = {
    completed: false,
    title: ''
  }

  getAllTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5').pipe(
      tap(todos => this.todos = todos)
    )
  }

  create(todo:Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo).pipe(
      tap(todo => this.todos.unshift(todo))
    )
  }

  update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
  }

  getById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
