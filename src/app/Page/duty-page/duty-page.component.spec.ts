import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutyPageComponent } from './duty-page.component';

describe('DutyPageComponent', () => {
  let component: DutyPageComponent;
  let fixture: ComponentFixture<DutyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
