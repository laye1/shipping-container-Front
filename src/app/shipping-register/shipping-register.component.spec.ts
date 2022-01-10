import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingRegisterComponent } from './shipping-register.component';

describe('ShippingRegisterComponent', () => {
  let component: ShippingRegisterComponent;
  let fixture: ComponentFixture<ShippingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
