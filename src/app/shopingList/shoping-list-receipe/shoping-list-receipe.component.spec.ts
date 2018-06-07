import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListReceipeComponent } from './shoping-list-receipe.component';

describe('ShopingListReceipeComponent', () => {
  let component: ShopingListReceipeComponent;
  let fixture: ComponentFixture<ShopingListReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingListReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
