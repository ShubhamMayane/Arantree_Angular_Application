import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOurFoundersComponent } from './about-us-our-founders.component';

describe('AboutUsOurFoundersComponent', () => {
  let component: AboutUsOurFoundersComponent;
  let fixture: ComponentFixture<AboutUsOurFoundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsOurFoundersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsOurFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
