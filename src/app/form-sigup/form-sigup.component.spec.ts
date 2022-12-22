import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSigupComponent } from './form-sigup.component';

describe('FormSigupComponent', () => {
  let component: FormSigupComponent;
  let fixture: ComponentFixture<FormSigupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSigupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
