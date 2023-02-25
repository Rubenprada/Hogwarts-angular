import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySoonsComponent } from './my-soons.component';

describe('MySoonsComponent', () => {
  let component: MySoonsComponent;
  let fixture: ComponentFixture<MySoonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySoonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
