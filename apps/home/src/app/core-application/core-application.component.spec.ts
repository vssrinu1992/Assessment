import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreApplicationComponent } from './core-application.component';

describe('CoreApplicationComponent', () => {
  let component: CoreApplicationComponent;
  let fixture: ComponentFixture<CoreApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
