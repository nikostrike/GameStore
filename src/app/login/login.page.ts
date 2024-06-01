import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(8),
          Validators.pattern('^[a-zA-Z0-9]+$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4),
          Validators.pattern('^[0-9]+$')
        ]
      ]
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.valid) {
        const username = this.loginForm.get('username')?.value;
        localStorage.setItem('username', username);
        console.log('Formulario válido', this.loginForm.value);
        this.router.navigate(['/home']);
      } else {
        console.log('Formulario inválido');
      }
    }
  }
}
