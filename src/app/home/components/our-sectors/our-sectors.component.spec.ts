import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSectorsComponent } from './our-sectors.component';

describe('OurSectorsComponent', () => {
  let component: OurSectorsComponent;
  let fixture: ComponentFixture<OurSectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurSectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
