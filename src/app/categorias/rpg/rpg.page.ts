import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.page.html',
  styleUrls: ['./rpg.page.scss'],
})
export class RPGPage implements OnInit {

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
