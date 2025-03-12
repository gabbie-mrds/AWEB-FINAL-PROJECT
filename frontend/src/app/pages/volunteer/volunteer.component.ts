import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, FormsModule, AbstractControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})

export class VolunteerComponent {
  name: string = '';
  email: string = '';
  birthDate!: Date;
  workCourse: string = '';
  companySchool: string = '';
  phoneNum: string = '';
  facebook: string = '';
  address: string = '';
  chapter: string = '';
  committee: string = '';
  altCommittee: string = '';

  submitted = false;
  success = '';
  error = '';

  ngOnInit(){
    AOS.init();
  }

  // CUSTOM VALIDATION TO CHECK AGE IF BELOW 17
  minAge(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
  
      const birthDate = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const old = age > minAge || (age === minAge && today >= new Date(birthDate.setFullYear(today.getFullYear())));
  
      return old ? null : { minAge: { requiredAge: minAge, actualAge: age } };
    };
  }

  // CUSTOM VALIDATION TO CHECK IF DATE IS IN THE PUTURE
  noFutureDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
  
      const birthDate = new Date(control.value);
      const today = new Date();
  
      return birthDate > today ? { futureDate: true } : null;
    };
  }

  // CUSTOM VALIDATION TO CHECK IF SELECTED COM AND ALT COM IS SAME
  commValidator(form: AbstractControl): ValidationErrors | null {
    const committee = form.get('committee')?.value;
    const altCommittee = form.get('altCommittee')?.value;
  
    if (!committee || !altCommittee) {
      return null;
    }
    
    if (committee === altCommittee) {
      return { sameCommittee: true };
    }
    
    return null;
  }

  resetForm() {
    this.formData.reset();
  }

  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl(null, [Validators.required, this.minAge(17), this.noFutureDate()]),
    workCourse: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    companySchool: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    phoneNum: new FormControl('', [Validators.required, Validators.pattern(/^09\d{9}$/)]),
    facebook: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    chapter: new FormControl('', [Validators.required]),
    committee: new FormControl('', Validators.required),
    altCommittee: new FormControl('', Validators.required),
  }, { validators: this.commValidator });

  constructor(private http: HttpClient) { }

  onClickSubmit(){
    if (this.formData.valid){
      this.submitted = true;
      
      this.http.post('http://localhost:3000/admin/volunteer', this.formData.value).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.success = 'Volunteer form sent successfully!';
          this.formData.reset();
        },
        error: (error) => {
          console.error('Error:', error);
          this.error = 'Failed to submit form. Please try again later.';
        },
        complete: () => {
          this.submitted = false;
        }
      });
    }
  }
}
