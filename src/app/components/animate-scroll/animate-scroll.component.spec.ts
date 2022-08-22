import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateScrollComponent } from './animate-scroll.component';

describe('AnimateScrollComponent', () => {
  let component: AnimateScrollComponent;
  let fixture: ComponentFixture<AnimateScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimateScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimateScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
