import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  constructor(
    public todosService: TodosService, 
    public modalService: ModalService
    ) { }


  ngOnInit() {
    this.todosService.getAllTodos().subscribe()
  }

}
