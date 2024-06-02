import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disparos',
  templateUrl: './disparos.page.html',
  styleUrls: ['./disparos.page.scss'],
})
export class DisparosPage implements OnInit {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
