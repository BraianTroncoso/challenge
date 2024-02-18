import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementPanelComponentComponent } from './user-management-panel-component.component';

describe('UserManagementPanelComponentComponent', () => {
  let component: UserManagementPanelComponentComponent;
  let fixture: ComponentFixture<UserManagementPanelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserManagementPanelComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserManagementPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
