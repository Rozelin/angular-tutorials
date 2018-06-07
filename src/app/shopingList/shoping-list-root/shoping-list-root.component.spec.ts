import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListRootComponent } from './shoping-list-root.component';

describe('ShopingListRootComponent', () => {
  let component: ShopingListRootComponent;
  let fixture: ComponentFixture<ShopingListRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
