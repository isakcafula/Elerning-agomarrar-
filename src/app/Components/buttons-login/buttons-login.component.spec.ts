import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLoginComponent } from './buttons-login.component';

describe('ButtonsLoginComponent', () => {
  let component: ButtonsLoginComponent;
  let fixture: ComponentFixture<ButtonsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
