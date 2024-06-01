import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisparosPage } from './disparos.page';

describe('DisparosPage', () => {
  let component: DisparosPage;
  let fixture: ComponentFixture<DisparosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DisparosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
