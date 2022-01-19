import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotContentComponent } from './single-slot-content.component';

describe('SingleSlotContentComponent', () => {
  let component: SingleSlotContentComponent;
  let fixture: ComponentFixture<SingleSlotContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSlotContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSlotContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
