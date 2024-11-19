import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaRecetaComponent } from './form-nueva-receta.component';

describe('FormNuevaRecetaComponent', () => {
  let component: FormNuevaRecetaComponent;
  let fixture: ComponentFixture<FormNuevaRecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNuevaRecetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevaRecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
