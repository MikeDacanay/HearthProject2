import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamProComponent } from './stream-pro.component';

describe('StreamProComponent', () => {
  let component: StreamProComponent;
  let fixture: ComponentFixture<StreamProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
