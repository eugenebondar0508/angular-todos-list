import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces';
import { ModalService } from 'src/app/services/modal.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit, OnDestroy, OnChanges {

  form: FormGroup
  todo: Todo 
  uSub: Subscription

  @Input() todoById: Todo

  constructor( 
    private todosService: TodosService,
    private modalService: ModalService
    ) { }

  ngOnChanges() {
    this.todo = this.todosService.todo
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(this.todo.title, Validators.required)
    })
  }

  ngOnDestroy() {
    if(this.uSub) {
      this.uSub.unsubscribe()
    }
  }

  submit() {
    if(this.form.invalid) {
      return
    }
    if(this.todo.id > 200) {
      this.todo.title = this.form.value.title
      this.modalService.close()
    }
    if(this.todo.id < 200) {
      this.todo.title = this.form.value.title
    }
    this.uSub = this.todosService.update({
      ...this.todo,
      title: this.form.value.title
    }).subscribe((todo) => {
      this.todosService.newTodo.title= todo.title
      this.todosService.newTodo.id = todo.id
      this.modalService.close()
    })
  }


}
