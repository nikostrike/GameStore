import { TestBed } from '@angular/core/testing';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { DbService } from './db.service';

describe('DbService', () => {
  let service: DbService;
  let sqliteMock: any;

  beforeEach(() => {
    sqliteMock = jasmine.createSpyObj('SQLite', ['create']);

    TestBed.configureTestingModule({
      providers: [
        DbService,
        { provide: SQLite, useValue: sqliteMock },
        ToastController
      ]
    });
    service = TestBed.inject(DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
