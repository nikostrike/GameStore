import { of } from 'rxjs';

export class DbServiceMock {
  getIsDBReady() {
    return of(true); // Simula que la base de datos está lista
  }

  insertUsuario(usuario: string, nombre: string, apellido: string, email: string, telefono: string, password: string) {
    return Promise.resolve(); // Simula una inserción exitosa
  }
}
