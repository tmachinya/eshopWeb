import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendituresearchedComponent } from './expendituresearched.component';

describe('ExpendituresearchedComponent', () => {
  let component: ExpendituresearchedComponent;
  let fixture: ComponentFixture<ExpendituresearchedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpendituresearchedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpendituresearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
