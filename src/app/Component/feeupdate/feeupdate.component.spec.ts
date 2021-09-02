import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeupdateComponent } from './feeupdate.component';

describe('FeeupdateComponent', () => {
  let component: FeeupdateComponent;
  let fixture: ComponentFixture<FeeupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
