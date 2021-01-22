import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveProductsComponent } from './receive-products.component';

describe('ReceiveProductsComponent', () => {
  let component: ReceiveProductsComponent;
  let fixture: ComponentFixture<ReceiveProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
