import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchModalComponent } from './auto-search-modal.component';

describe('AutoSearchModalComponent', () => {
  let component: AutoSearchModalComponent;
  let fixture: ComponentFixture<AutoSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
