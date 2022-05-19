import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAppComponent } from './pagina-app.component';

describe('PaginaAppComponent', () => {
  let component: PaginaAppComponent;
  let fixture: ComponentFixture<PaginaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
