import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredUsersPanelComponentComponent } from './registered-users-panel-component/registered-users-panel-component.component';
import { CrudComponent } from './crud/crud.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: RegisteredUsersPanelComponentComponent },
  { path: 'add-user', component: CrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
