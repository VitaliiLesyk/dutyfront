import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkerPageComponen } from './update-worker-page.component';

describe('AddWorkerPageComponent', () => {
  let component: UpdateWorkerPageComponen;
  let fixture: ComponentFixture<UpdateWorkerPageComponen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorkerPageComponen ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkerPageComponen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
