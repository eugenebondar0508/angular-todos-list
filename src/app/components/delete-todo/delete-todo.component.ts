import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces';
import { ModalService } from 'src/app/services/modal.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.scss']
})
export class DeleteTodoComponent implements OnInit, OnChanges {

  constructor(
    private todosService: TodosService,
    private modalService: ModalService
    ) { }

  @Input() todoById: Todo
  todo: Todo

  ngOnInit() {
  }

  ngOnChanges() {
    this.todo = this.todosService.todo
  }

  removeTodo(id: number) {
  this.todosService.remove(id).subscribe(() => {
    this.todosService.todos = this.todosService.todos.filter(todo => todo.id !== id)
    this.modalService.close()
  })
  }

}
