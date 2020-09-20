import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewAssignmentComponent } from './view-assignment.component';

describe('ViewAssignmentComponent', () => {
  let component: ViewAssignmentComponent;
  let fixture: ComponentFixture<ViewAssignmentComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ViewAssignmentComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
