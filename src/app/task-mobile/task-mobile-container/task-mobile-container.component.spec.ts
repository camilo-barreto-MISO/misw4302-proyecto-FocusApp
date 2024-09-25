import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskMobileContainerComponent } from './task-mobile-container.component';

describe('TaskMobileContainerComponent', () => {
  let component: TaskMobileContainerComponent;
  let fixture: ComponentFixture<TaskMobileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskMobileContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskMobileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
