import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTextSliderComponent } from './services-text-slider.component';

describe('ServicesTextSliderComponent', () => {
  let component: ServicesTextSliderComponent;
  let fixture: ComponentFixture<ServicesTextSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesTextSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesTextSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
