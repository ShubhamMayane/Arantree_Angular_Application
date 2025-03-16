import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesHeadingWithDescriptionComponent } from './services-heading-with-description.component';

describe('ServicesHeadingWithDescriptionComponent', () => {
  let component: ServicesHeadingWithDescriptionComponent;
  let fixture: ComponentFixture<ServicesHeadingWithDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesHeadingWithDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesHeadingWithDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
