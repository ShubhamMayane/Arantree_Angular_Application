import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDescriptionSectionComponent } from './services-description-section.component';

describe('ServicesDescriptionSectionComponent', () => {
  let component: ServicesDescriptionSectionComponent;
  let fixture: ComponentFixture<ServicesDescriptionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesDescriptionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesDescriptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
