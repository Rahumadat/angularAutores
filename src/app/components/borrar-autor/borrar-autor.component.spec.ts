import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarAutorComponent } from './borrar-autor.component';

describe('BorrarAutorComponent', () => {
  let component: BorrarAutorComponent;
  let fixture: ComponentFixture<BorrarAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarAutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
