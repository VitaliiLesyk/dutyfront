import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerListPageComponent } from './worker-list-page.component';

describe('WorkerListPageComponent', () => {
  let component: WorkerListPageComponent;
  let fixture: ComponentFixture<WorkerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
