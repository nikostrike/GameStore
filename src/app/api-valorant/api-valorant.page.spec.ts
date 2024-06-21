import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiValorantPage } from './api-valorant.page';

describe('ApiValorantPage', () => {
  let component: ApiValorantPage;
  let fixture: ComponentFixture<ApiValorantPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiValorantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
