import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropItemComponent } from './prop-item.component';

describe('PropItemComponent', () => {
  let component: PropItemComponent;
  let fixture: ComponentFixture<PropItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
