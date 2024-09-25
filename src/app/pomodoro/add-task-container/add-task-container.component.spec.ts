import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskContainerComponent } from './add-task-container.component';

describe('AddTaskContainerComponent', () => {
  let component: AddTaskContainerComponent;
  let fixture: ComponentFixture<AddTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
