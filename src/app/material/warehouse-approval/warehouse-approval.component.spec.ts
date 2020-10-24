import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseApprovalComponent } from './warehouse-approval.component';

describe('WarehouseApprovalComponent', () => {
  let component: WarehouseApprovalComponent;
  let fixture: ComponentFixture<WarehouseApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
