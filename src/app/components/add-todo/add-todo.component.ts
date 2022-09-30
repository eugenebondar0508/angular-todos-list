import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('',[Validators.required])
  })

  constructor(
    private todosService: TodosService,
    private modalService: ModalService
    ) { }

  ngOnInit() {
  }


  submit() {
    this.todosService.create({
      completed: false,
      title: this.form.value.title as string,
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
