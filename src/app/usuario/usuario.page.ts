import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  alertButtons = ['OK'];
  userForm: FormGroup;
  username: string | null = '';

  private animation!: Animation;

  constructor(private formBuilder: FormBuilder, private router: Router, private animationCtrl: AnimationController) {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: ['']
    });
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(700)
      .iterations(1)
      
      .fromTo('opacity', '0.2', '1');
  }

  play() {
    this.animation.play();
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
