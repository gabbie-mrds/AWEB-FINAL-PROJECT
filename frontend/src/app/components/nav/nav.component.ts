import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent{



}
