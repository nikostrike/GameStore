import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiValorantPage } from './api-valorant.page';
import { HttpClientModule } from '@angular/common/http';

describe('ApiValorantPage', () => {
  let component: ApiValorantPage;
  let fixture: ComponentFixture<ApiValorantPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiValorantPage],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiValorantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
