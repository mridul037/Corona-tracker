import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { About3Component } from './about3.component';

describe('About3Component', () => {
  let component: About3Component;
  let fixture: ComponentFixture<About3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ About3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(About3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
