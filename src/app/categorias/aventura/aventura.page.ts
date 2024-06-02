import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.page.html',
  styleUrls: ['./aventura.page.scss'],
})
export class AventuraPage implements OnInit {

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
