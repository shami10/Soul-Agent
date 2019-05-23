import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeWorkComponent } from './we-work.component';

describe('WeWorkComponent', () => {
  let component: WeWorkComponent;
  let fixture: ComponentFixture<WeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
