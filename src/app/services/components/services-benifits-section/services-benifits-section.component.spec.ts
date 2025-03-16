import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBenifitsSectionComponent } from './services-benifits-section.component';

describe('ServicesBenifitsSectionComponent', () => {
  let component: ServicesBenifitsSectionComponent;
  let fixture: ComponentFixture<ServicesBenifitsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBenifitsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBenifitsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
