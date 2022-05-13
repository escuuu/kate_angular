import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadDelAireComponent } from './calidad-del-aire.component';

describe('CalidadDelAireComponent', () => {
  let component: CalidadDelAireComponent;
  let fixture: ComponentFixture<CalidadDelAireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalidadDelAireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalidadDelAireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
