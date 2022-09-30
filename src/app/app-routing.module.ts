import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateAccountComponent
  },
  {
    path: 'todos',
    component: TodosListComponent
  }, 
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
