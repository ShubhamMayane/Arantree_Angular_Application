import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCounterSectionComponent } from './services-counter-section.component';

describe('ServicesCounterSectionComponent', () => {
  let component: ServicesCounterSectionComponent;
  let fixture: ComponentFixture<ServicesCounterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesCounterSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesCounterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
