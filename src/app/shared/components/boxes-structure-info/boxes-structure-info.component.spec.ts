import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesStructureInfoComponent } from './boxes-structure-info.component';

describe('BoxesStructureInfoComponent', () => {
  let component: BoxesStructureInfoComponent;
  let fixture: ComponentFixture<BoxesStructureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxesStructureInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxesStructureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
