import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFrigosComponent } from './lista-frigos.component';

describe('ListaFrigosComponent', () => {
  let component: ListaFrigosComponent;
  let fixture: ComponentFixture<ListaFrigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFrigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFrigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
