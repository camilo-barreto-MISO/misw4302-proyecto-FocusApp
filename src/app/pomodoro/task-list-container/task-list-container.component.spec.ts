import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListContainerComponent } from './task-list-container.component';

describe('TaskListContainerComponent', () => {
  let component: TaskListContainerComponent;
  let fixture: ComponentFixture<TaskListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
