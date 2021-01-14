import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudetItemListComponent } from './budet-item-list.component';

describe('BudetItemListComponent', () => {
  let component: BudetItemListComponent;
  let fixture: ComponentFixture<BudetItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudetItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudetItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
