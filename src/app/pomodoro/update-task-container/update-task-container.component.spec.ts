import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskContainerComponent } from './update-task-container.component';

describe('UpdateTaskContainerComponent', () => {
  let component: UpdateTaskContainerComponent;
  let fixture: ComponentFixture<UpdateTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaskContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
