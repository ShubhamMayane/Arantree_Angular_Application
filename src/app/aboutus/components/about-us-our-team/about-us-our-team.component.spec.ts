import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsOurTeamComponent } from './about-us-our-team.component';

describe('AboutUsOurTeamComponent', () => {
  let component: AboutUsOurTeamComponent;
  let fixture: ComponentFixture<AboutUsOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsOurTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
