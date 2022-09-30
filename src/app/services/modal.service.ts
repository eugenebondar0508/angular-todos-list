import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisibleAdd$ = new BehaviorSubject<boolean>(false)
  isVisibleEdit$ = new BehaviorSubject<boolean>(false)
  isVisibleDelete$ = new BehaviorSubject<boolean>(false)
  constructor() { }

  openAddModal() {
    this.isVisibleAdd$.next(true)
  }

  openEditModal() {
      this.isVisibleEdit$.next(true)  
  }

  openDeleteModal() {
    this.isVisibleDelete$.next(true)  
}


  close() {
    this.isVisibleAdd$.next(false)
    this.isVisibleEdit$.next(false)
    this.isVisibleDelete$.next(false) 
  }
}
