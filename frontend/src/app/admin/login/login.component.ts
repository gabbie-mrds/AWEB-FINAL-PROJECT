import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

interface LoginResponse {
  user?: {
    email: string;
  };
  success: boolean;
  message?: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  submitted = false;
  success = '';
  error = '';

  formData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  constructor(private router: Router, private http: HttpClient) { }

  onClickSubmit() {
    if (this.formData.valid) {
      this.submitted = true;
      this.error = '';
      this.success = '';
      
      this.http.post<LoginResponse>('http://localhost:3000/admin/login', this.formData.value).subscribe({
        next: (response) => {
          if (response) {
            sessionStorage.setItem('isLoggedIn', 'true');      
            this.success = 'Login successful!';
            this.router.navigate(['/admin']);
          } else {
            this.error = 'Login failed. Please try again.';
          }
        },
        error: (error) => {
          console.error('error:', error);
          this.error = error.error?.message || 'Failed to login. Please try again later.';
        },
        complete: () => {
          this.submitted = false;
        }
      });
    }
  }
}