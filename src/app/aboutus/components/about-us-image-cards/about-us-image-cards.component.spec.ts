import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsImageCardsComponent } from './about-us-image-cards.component';

describe('AboutUsImageCardsComponent', () => {
  let component: AboutUsImageCardsComponent;
  let fixture: ComponentFixture<AboutUsImageCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsImageCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsImageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
