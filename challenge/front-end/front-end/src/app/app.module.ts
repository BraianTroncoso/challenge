import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RegisteredUsersPanelComponentComponent } from './registered-users-panel-component/registered-users-panel-component.component';
import { UserManagementPanelComponentComponent } from './user-management-panel-component/user-management-panel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredUsersPanelComponentComponent,
    UserManagementPanelComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
