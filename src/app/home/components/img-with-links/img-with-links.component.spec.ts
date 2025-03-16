import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgWithLinksComponent } from './img-with-links.component';

describe('ImgWithLinksComponent', () => {
  let component: ImgWithLinksComponent;
  let fixture: ComponentFixture<ImgWithLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgWithLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgWithLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
