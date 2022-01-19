import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotContentComponent } from './multi-slot-content.component';

describe('MultiSlotContentComponent', () => {
  let component: MultiSlotContentComponent;
  let fixture: ComponentFixture<MultiSlotContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSlotContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSlotContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
