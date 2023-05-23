import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDealsComponent } from './new-deals.component';

describe('NewDealsComponent', () => {
  let component: NewDealsComponent;
  let fixture: ComponentFixture<NewDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDealsComponent]
    });
    fixture = TestBed.createComponent(NewDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
