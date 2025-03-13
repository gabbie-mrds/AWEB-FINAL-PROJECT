import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  email: string = '';
  password: string = '';
 
  submitted = false;
  success = '';
  error = '';

  formData: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  constructor(private http: HttpClient) { }

  onClickSubmit(){
    console.log(this.formData.value);
    if (this.formData.valid){
      this.submitted = true;
      
      this.http.post('http://localhost:3000/admin/login', this.formData.value).subscribe({
        next: (response) => {
          console.log('success:', response);
          this.success = 'message sent successfully!';
          this.formData.reset();
        },
        error: (error) => {
          console.error('error:', error);
          this.error = 'failed to send message. please try again later.';
        },
        complete: () => {
          this.submitted = false;
        }
      });
    }
  }
}
