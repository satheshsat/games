import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarraceComponent } from './carrace.component';

describe('CarraceComponent', () => {
  let component: CarraceComponent;
  let fixture: ComponentFixture<CarraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarraceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
