import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private usuario: string = '';

  setUsuario(usuario: string) {
    this.usuario = usuario;
  }

  getUsuario(): string {
    return this.usuario;
  }


  constructor() { }
}
