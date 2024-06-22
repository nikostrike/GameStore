import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  usuarioRecibidoPersistente: string = '';

  private animation!: Animation;

  constructor(private router: Router,
              private animationCtrl: AnimationController,
              private sessionService: SessionService) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(150)
      .iterations(11)
      .direction('alternate')
      .fromTo('background', 'RED', 'background');
  }

  play() {
    this.animation.play();
  }
  
  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToUsuario() {
    this.router.navigate(['/login']);
  }

  navigateToApiValorant() {
    this.router.navigate(['/api-valorant']);
  }

  ngOnInit() {
    this.usuarioRecibidoPersistente = this.sessionService.getUsuario();
  }

  navigateToCategory(category: string) {
    this.router.navigate([`/categorias/${category.toLowerCase()}`]);
  }

}
