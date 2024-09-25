import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminContainersComponent } from './admin-containers.component';

describe('AdminContainersComponent', () => {
  let component: AdminContainersComponent;
  let fixture: ComponentFixture<AdminContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminContainersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
