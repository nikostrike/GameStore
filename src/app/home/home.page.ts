import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  username: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  navigateToCategory(category: string) {
    this.router.navigate([`/categorias/${category.toLowerCase()}`]);
  }

}
