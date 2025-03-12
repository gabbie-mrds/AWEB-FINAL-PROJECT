import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import * as AOS from 'aos';
 import 'aos/dist/aos.css';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  charCount: number = 0;

  submitted = false;
  success = '';
  error = '';

  ngOnInit(){
    AOS.init();
  }

  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
    message: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
  });

  constructor(private http: HttpClient) {
    this.formData.get('message')?.valueChanges.subscribe(value => {
      this.charCount = value?.length || 0;
    });
  }

  updateCharCount() {
    this.charCount = this.formData.get('message')?.value?.length || 0;
  }

  onClickSubmit(){
    if (this.formData.valid){
      this.submitted = true;
      
      this.http.post('http://localhost:3000/admin/contact', this.formData.value).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.success = 'Message sent successfully!';
          this.formData.reset();
          this.charCount = 0;
        },
        error: (error) => {
          console.error('Error:', error);
          this.error = 'Failed to send message. Please try again later.';
        },
        complete: () => {
          this.submitted = false;
        }
      });
    }
  }
}
