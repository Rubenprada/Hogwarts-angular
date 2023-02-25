import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoonsViewComponent } from './soons-view.component';

describe('SoonsViewComponent', () => {
  let component: SoonsViewComponent;
  let fixture: ComponentFixture<SoonsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoonsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoonsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
