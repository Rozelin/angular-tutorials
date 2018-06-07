import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListBookComponent } from './shoping-list-book.component';

describe('ShopingListBookComponent', () => {
  let component: ShopingListBookComponent;
  let fixture: ComponentFixture<ShopingListBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
