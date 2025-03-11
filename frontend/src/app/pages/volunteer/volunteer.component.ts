import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

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

  formData: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl(null, [Validators.required]),
    workCourse: new FormControl('', [Validators.required]),
    companySchool: new FormControl('', [Validators.required]),
    phoneNum: new FormControl('', [Validators.required]),
    facebook: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    chapter: new FormControl('', [Validators.required]),
    committee: new FormControl('', [Validators.required]),
    altCommittee: new FormControl('', [Validators.required]),
  });

  onClickSubmit(data: {
    name: string;
    email: string;
    birthDate: Date;
    workCourse: string;
    companySchool: string;
    phoneNum: string;
    facebook: string;
    address: string;
    chapter: string;
    committee: string;
    altCommittee: string;
  })

  {
    this.submitted = true;
    this.name = data.name;
    this.email = data.email;
    this.birthDate = data.birthDate;
    this.workCourse = data.workCourse;
    this.companySchool = data.companySchool;
    this.phoneNum = data.phoneNum;
    this.facebook = data.facebook;
    this.address = data.address;
    this.chapter = data.chapter;
    this.committee = data.committee;
    this.altCommittee = data.altCommittee

    if (this.formData.valid) {
      console.log("Your Volunteer Form has been Submitted!", this.formData.value);
    } else {
      console.log("Your Form is not Valid.")
    }
  }

}
