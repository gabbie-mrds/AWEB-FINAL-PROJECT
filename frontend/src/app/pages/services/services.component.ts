import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
 import 'aos/dist/aos.css';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ngOnInit(){
      AOS.init();
    }
  

  cards = [
    {
      img: "alternative-learning.jpg",
      title: "Alternative Educational Session",
      descrip: "Providing quality education to underprivileged children through alternative learning sessions, ensuring they receive proper guidance and academic support despite their circumstances."
    },
    {
      img: "palawan-chapter.jpg",
      title: "Palawan Chapter",
      descrip: "Expanding our reach to Palawan, this chapter focuses on community engagement, educational initiatives, and social welfare programs to support local children and families in need."
    },
    {
      img: "food-caravan.jpg",
      title: "Drive Caravan",
      descrip: "A mobile outreach program delivering essential supplies, education, and healthcare services to remote and disadvantaged communities, bringing hope and support to those in need."
    },
    {
      img: "alternative-learning.jpg",
      title: "Alternative Educational Session",
      descrip: "Empowering children through non-traditional learning methods, including hands-on activities, mentorship, and skill-based education to prepare them for a brighter future."
    },
    {
      img: "palawan-chapter.jpg",
      title: "Palawan Chapter",
      descrip: "Strengthening our community programs in Palawan through sustainable development efforts, education sponsorships, and skill-building workshops for children and youth."
    },
    {
      img: "food-caravan.jpg",
      title: "Drive Caravan",
      descrip: "Continuing our mission to reach out to underserved communities with our mobile units, providing food, clothing, educational materials, and medical assistance."
    },
];


  beneficiaries = [
    {
      img: "indigent-children.jpg",
      title: "Indigent Children",
      descrip: "Providing support and opportunities for underprivileged children."
    },
    {
      img: "rescued-children.jpg",
      title: "Rescued Children",
      descrip: "Helping children find safety, care, and a brighter future."
    },
    {
      img: "out-of-school-youth.jpg",
      title: "Out-of-School Youth",
      descrip: "Creating educational and vocational pathways for youth."
    },
    {
      img: "indigenous-children.jpg",
      title: "Indigenous Children",
      descrip: "Supporting and empowering indigenous communities."
    }
  ];
}
