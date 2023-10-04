import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProductRowComponent } from './app-product-row.component';

describe('AppProductRowComponent', () => {
  let component: AppProductRowComponent;
  let fixture: ComponentFixture<AppProductRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppProductRowComponent]
    });
    fixture = TestBed.createComponent(AppProductRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
