import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDecklistComponent } from './create-decklist.component';

describe('CreateDecklistComponent', () => {
  let component: CreateDecklistComponent;
  let fixture: ComponentFixture<CreateDecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
