import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDescreptionComponent } from './about-us-descreption.component';

describe('AboutUsDescreptionComponent', () => {
  let component: AboutUsDescreptionComponent;
  let fixture: ComponentFixture<AboutUsDescreptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDescreptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsDescreptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
