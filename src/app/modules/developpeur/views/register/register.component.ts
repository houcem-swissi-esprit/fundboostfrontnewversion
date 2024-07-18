import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from 'src/app/modules/admin/classes/role';
import { User } from 'src/app/modules/admin/classes/user';
import { UserService } from 'src/app/modules/admin/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  roles = Object.values(Role);

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [Role.CLIENT, [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user: User = {
        idUser: 1,
        username: this.registerForm.get('username')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        role: this.registerForm.get('role')?.value
      };

      this.userService.registerUser(user).subscribe(
        response => {
          console.log('Registration successful', response);
          this.router.navigate(['login']);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }
}
