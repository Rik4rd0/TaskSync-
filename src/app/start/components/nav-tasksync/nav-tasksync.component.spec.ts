import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTasksyncComponent } from './nav-tasksync.component';

describe('NavTasksyncComponent', () => {
  let component: NavTasksyncComponent;
  let fixture: ComponentFixture<NavTasksyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavTasksyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTasksyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
