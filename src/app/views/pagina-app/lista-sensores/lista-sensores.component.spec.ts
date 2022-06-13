import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSensoresComponent } from './lista-sensores.component';

describe('ListaSensoresComponent', () => {
  let component: ListaSensoresComponent;
  let fixture: ComponentFixture<ListaSensoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSensoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
