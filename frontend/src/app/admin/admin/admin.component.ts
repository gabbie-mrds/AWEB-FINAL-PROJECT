import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as AOS from 'aos';
 import 'aos/dist/aos.css';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  ngOnInit(){
      AOS.init();
    } 
  data: { contacts: any[]; volunteers: any[] } = { contacts: [], volunteers: [] };
  contacts: any[] = [];
  contactMessage = '';
  volunteerMessage = '';

  constructor(private http: HttpClient, private router: Router) { 
    this.fetchAllData();
  }

  loading = true;

  fetchAllData(){
    // this.http.get<{ contacts: any[]; volunteers: any[] }>('http://localhost:3000/admin').subscribe({
    this.http.get<{ contacts: any[]; volunteers: any[] }>('https://bangketa-eskwela-backend.onrender.com/admin').subscribe({
      next: (data) => {
        this.data = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching contacts:', error);
        this.contactMessage, this.volunteerMessage = "Failed to load data";
        this.loading = false;
      }
    });
  }

  deleteContact(id = Number){
    if (!confirm('Are you sure you want to delete this contact?')) {
      return;
    }
    // this.http.delete<any[]>(`http://localhost:3000/admin/contact/${id}`).subscribe({
    this.http.delete<any[]>(`https://bangketa-eskwela-backend.onrender.com/admin/contact/${id}`).subscribe({
      next: () => {
        console.log(`Contact with ID ${id} deleted successfully.`);
        this.contactMessage = 'Contact deleted successfully!';
        this.data.contacts = this.data.contacts.filter(contact => contact.cid !== id);
      },
      error: (error) => {
        console.error('Error deleting contacts:', error);
        this.contactMessage = "Failed to load contacts";
      }
    });
  }

  updateStatus(id = Number){
    if (!confirm('Are you sure you want to update status?')) {
      return;
    }
    const statusField = document.getElementById(`status-${id}`) as HTMLSelectElement;
    const status = statusField.value;
    // this.http.patch<any[]>(`http://localhost:3000/admin/volunteer/${id}`, { status: status }).subscribe({
    this.http.patch<any[]>(`https://bangketa-eskwela-backend.onrender.com/admin/volunteer/${id}`, { status: status }).subscribe({
      next: () => {
        console.log(`Volunteer ${id} status updated to ${status}`);
        this.volunteerMessage = `Volunteer status updated to ${status}`;
        const volunteer = this.data.volunteers.find((volunteer) => volunteer.vid === id);
        if (volunteer) volunteer.status = status;
      },
      error: (error) => {
        console.error('Error deleting contacts:', error);
        this.volunteerMessage = "Failed to load contacts";
      }
    });
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
