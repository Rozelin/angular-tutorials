import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListHeaderComponent } from './shoping-list-header.component';

describe('ShopingListHeaderComponent', () => {
  let component: ShopingListHeaderComponent;
  let fixture: ComponentFixture<ShopingListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
