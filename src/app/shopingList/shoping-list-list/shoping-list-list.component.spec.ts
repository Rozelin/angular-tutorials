import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListListComponent } from './shoping-list-list.component';

describe('ShopingListListComponent', () => {
  let component: ShopingListListComponent;
  let fixture: ComponentFixture<ShopingListListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
