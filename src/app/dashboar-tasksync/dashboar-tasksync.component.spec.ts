import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarTasksyncComponent } from './dashboar-tasksync.component';

describe('DashboarTasksyncComponent', () => {
  let component: DashboarTasksyncComponent;
  let fixture: ComponentFixture<DashboarTasksyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarTasksyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarTasksyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
