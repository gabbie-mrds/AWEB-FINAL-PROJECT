import { Component } from '@angular/core';
import * as AOS from 'aos';
 import 'aos/dist/aos.css';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  ngOnInit(){
      AOS.init();
    }
  

}
