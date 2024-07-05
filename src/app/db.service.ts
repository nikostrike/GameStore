import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public db!: SQLiteObject;

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite,
              private toastController: ToastController) {
    this.initDatabase();
  }

  private async initDatabase() {
    try {
      const db = await this.sqlite.create({
        name: 'nicodb.db',
        location: 'default'
      });
      this.db = db;
      await this.createTables();
      this.isDBReady.next(true);
      await this.presentToast('Base de datos y tabla creadas con éxito'); 
    } catch (error) {
      await this.presentToast('Error al insertar usuario:' + error);
    }
  }

  private async createTables() {
    try {
      await this.db.executeSql(
        `CREATE TABLE IF NOT EXISTS usuarios (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          usuario TEXT,
          nombre TEXT,
          apellido TEXT,
          email TEXT,
          telefono TEXT,
          password TEXT
        )`, []);
      await this.presentToast('Table created');
    } catch (error) {
      await this.presentToast('Error creating table' + error);
    }
  }

  async insertUsuario(usuario: string, nombre: string, apellido: string, email: string, telefono: string, password: string) {
    try {
      await this.db.executeSql(`
        INSERT INTO usuarios (usuario, nombre, apellido, email, telefono, password) VALUES (?, ?, ?, ?, ?, ?);
      `, [usuario, nombre, apellido, email, telefono, password]);
      await this.presentToast('Usuario insertado correctamente');
    } catch (error) {
      await this.presentToast('Error al insertar usuario:' + error);
    }
  }

  async validarUsuario(usuario: string, password: string) {
    try {
      const res = await this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password]);
      if (res.rows.length > 0) {
        return res.rows.item(0);
      } else {
        return null;
      }
    } catch (error) {
      await this.presentToast('Error al obtener usuario :' + error);
    }
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getIsDBReady() {
    return this.isDBReady.asObservable();
  }
}
