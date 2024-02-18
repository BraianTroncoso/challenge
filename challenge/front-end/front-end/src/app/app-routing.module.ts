import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredUsersPanelComponentComponent } from './registered-users-panel-component/registered-users-panel-component.component';
import { UserManagementPanelComponentComponent } from './user-management-panel-component/user-management-panel-component.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: RegisteredUsersPanelComponentComponent },
  { path: 'add-user', component: UserManagementPanelComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
