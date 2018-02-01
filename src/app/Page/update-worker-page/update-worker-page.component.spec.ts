import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkerPageComponent } from './update-worker-page.component';

describe('AddWorkerPageComponent', () => {
  let component: UpdateWorkerPageComponent;
  let fixture: ComponentFixture<UpdateWorkerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateWorkerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
