import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DbService } from '../db.service';
import { SessionService } from '../session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any="";
  password: string=""; 
  sesion_activa: any="";
  mensaje: string='';

  constructor(private alertController:AlertController, 
              private router:Router,
              private dbService: DbService,
              private navCtrl: NavController,
              private sessionService: SessionService
            ) { }

  ngOnInit() {
 
  }

  async login() {
    const usuario = await this.dbService.validarUsuario(this.usuario, this.password);
    if (usuario) {
      let NavigationExtras: NavigationExtras = {
        state:{
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password
        }

      }
      this.sessionService.setUsuario(this.usuario); 
      this.router.navigate(['/home'],NavigationExtras);
    } else {
      this.presentAlert('No existe el usuario en la base datos');
    }
  }
   

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  navigateToRegistrar() {
    this.router.navigate(['/registrar']);
  }

  
}
