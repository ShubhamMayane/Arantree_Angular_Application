import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBoxStructureComponent } from './services-box-structure.component';

describe('ServicesBoxStructureComponent', () => {
  let component: ServicesBoxStructureComponent;
  let fixture: ComponentFixture<ServicesBoxStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBoxStructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesBoxStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
