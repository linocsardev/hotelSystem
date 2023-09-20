import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotpagesfoundComponent } from './notpagesfound.component';

describe('NotpagesfoundComponent', () => {
  let component: NotpagesfoundComponent;
  let fixture: ComponentFixture<NotpagesfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotpagesfoundComponent]
    });
    fixture = TestBed.createComponent(NotpagesfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
