import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRegComponent } from './reactive-reg.component';

describe('ReactiveRegComponent', () => {
  let component: ReactiveRegComponent;
  let fixture: ComponentFixture<ReactiveRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
