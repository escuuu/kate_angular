import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMapaComponent } from './pagina-mapa.component';

describe('PaginaMapaComponent', () => {
  let component: PaginaMapaComponent;
  let fixture: ComponentFixture<PaginaMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
