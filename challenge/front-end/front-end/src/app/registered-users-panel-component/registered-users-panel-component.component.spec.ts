import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUsersPanelComponentComponent } from './registered-users-panel-component.component';

describe('RegisteredUsersPanelComponentComponent', () => {
  let component: RegisteredUsersPanelComponentComponent;
  let fixture: ComponentFixture<RegisteredUsersPanelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisteredUsersPanelComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredUsersPanelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
