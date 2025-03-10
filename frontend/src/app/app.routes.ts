import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';

export const routes: Routes = [

    {path: '', title: "BEF | HOME", component: HomeComponent},
    {path: 'about', title: "BEF | ABOUT", component: AboutComponent},
    {path: 'contact', title: "BEF | CONTACT", component: ContactComponent},
    {path: 'services', title: "BEF | SERVICES", component: ServicesComponent},
    {path: 'volunteer', title: "BEF | VOLUNTEER", component: VolunteerComponent},
    
];
