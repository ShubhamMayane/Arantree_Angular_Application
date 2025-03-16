import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSectorsCarouselComponent } from './services-sectors-carousel.component';

describe('ServicesSectorsCarouselComponent', () => {
  let component: ServicesSectorsCarouselComponent;
  let fixture: ComponentFixture<ServicesSectorsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSectorsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSectorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
