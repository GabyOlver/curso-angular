import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroFormComponent } from './otro-form.component';

describe('OtroFormComponent', () => {
  let component: OtroFormComponent;
  let fixture: ComponentFixture<OtroFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtroFormComponent]
    });
    fixture = TestBed.createComponent(OtroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
