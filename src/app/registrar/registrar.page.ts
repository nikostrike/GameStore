import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from '../db.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  usuarioRecibido: string='';
  passwordRecibido: string='';

  usuario: string='';
  nombre: string='';
  apellido: string='';
  email: string='';
  telefono: string='';
  password: string='';

  usuarioRecibidoPersistente: any='';

  isDBReady: boolean=false;

  constructor(private router: Router,
              private activateroute: ActivatedRoute,
              private alertController: AlertController,
              private dbService: DbService) { 
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado']; 
              
      console.log();
    }
  })
}


  navigateToUsuario() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.dbService.getIsDBReady().subscribe(isReady => {
      this.isDBReady = isReady;
      if (isReady) {
      }
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.guardarDatos();  
    }
  }

  guardarDatos() {
    this.dbService.insertUsuario(this.usuario, this.nombre, this.apellido, this.email, this.telefono, this.password)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');
        this.router.navigate(['/login']);
        
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos:'+ error);
        
      });
  }

}
