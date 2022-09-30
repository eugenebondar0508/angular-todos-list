import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces';
import { ModalService } from 'src/app/services/modal.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo
  public todoById: Todo

  constructor(
    public modalService: ModalService, 
    private todosServices: TodosService
    ) { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.todo.id === this.todosServices.newTodo.id) {
      this.todo.title = this.todosServices.newTodo.title
    }
  }

  toggle() {
    console.log(this.todo)
  }

  openEditModal(todo: Todo) {
    if(todo.id > 200) {
      this.todosServices.todo = todo
      this.modalService.openEditModal()
      
    } else {
      this.todosServices.getById(todo.id).subscribe(todo => {
        this.todosServices.todo = todo
        this.modalService.openEditModal()
      })

    }

  }
  
  openDeleteModal(todo: Todo) {
    if(todo.id > 200) {
      this.todosServices.todo = todo
      this.modalService.openDeleteModal()
      
    } else {
      this.todosServices.getById(todo.id).subscribe(todo => {
        this.todosServices.todo = todo
        this.modalService.openDeleteModal()
      })

    }
  }

}
