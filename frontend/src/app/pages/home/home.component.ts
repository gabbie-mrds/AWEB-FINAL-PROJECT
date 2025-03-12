import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as AOS from 'aos';
 import 'aos/dist/aos.css';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
  ]

}

