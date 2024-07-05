import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPage } from './registrar.page';
import { ActivatedRoute } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbService } from '../db.service';

describe('RegistrarPage', () => {
  let component: RegistrarPage;
  let fixture: ComponentFixture<RegistrarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarPage],
      providers: [ SQLite, DbService,
        { provide: ActivatedRoute, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
