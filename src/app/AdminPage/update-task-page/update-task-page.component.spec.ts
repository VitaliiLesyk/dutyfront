import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskPageComponent } from './update-task-page.component';

describe('AddTaskPageComponent', () => {
  let component: UpdateTaskPageComponent;
  let fixture: ComponentFixture<UpdateTaskPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
