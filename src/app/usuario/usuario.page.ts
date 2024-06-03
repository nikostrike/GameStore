import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  userForm: FormGroup;
  username: string | null = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: ['']
    });
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.loadUserData();
  }

  loadUserData() {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.userForm.setValue(JSON.parse(userData));
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToUsuario() {
    this.router.navigate(['/usuario']);
  }

  onSubmit() {
    if (this.userForm.valid) {
      localStorage.setItem('userData', JSON.stringify(this.userForm.value));
      console.log('Datos actualizados', this.userForm.value);
      // Aquí podrías mostrar una notificación o mensaje de éxito
    } else {
      console.log('Formulario inválido');
    }
  }

  resetForm() {
    this.userForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    });
  }
}
