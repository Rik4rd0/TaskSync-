import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonstartComponent } from './buttonstart.component';

describe('ButtonstartComponent', () => {
  let component: ButtonstartComponent;
  let fixture: ComponentFixture<ButtonstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonstartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
