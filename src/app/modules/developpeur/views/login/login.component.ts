import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRequest } from 'src/app/modules/admin/classes/auth';
import { AuthService } from 'src/app/modules/admin/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const authRequest: AuthRequest = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };

      this.authService.login(authRequest).subscribe(
        response => {
          console.log('Login successful', response);
          this.authService.saveToken(response.jwt);
          this.router.navigate(['/developpeur']); // Replace '/dashboard' with the actual component route
        },
        error => {
          console.error('Login failed', error);
        }
      );
    }
  }
}
