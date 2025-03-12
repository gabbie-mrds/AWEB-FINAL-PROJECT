import { Component } from '@angular/core';
import * as AOS from 'aos';
 import 'aos/dist/aos.css';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ngOnInit(){
      AOS.init();
    }

}
