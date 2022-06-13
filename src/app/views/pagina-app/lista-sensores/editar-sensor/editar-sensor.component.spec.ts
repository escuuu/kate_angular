import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSensorComponent } from './editar-sensor.component';

describe('EditarSensorComponent', () => {
  let component: EditarSensorComponent;
  let fixture: ComponentFixture<EditarSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
