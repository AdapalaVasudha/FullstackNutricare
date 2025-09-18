import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-landingpage.html',
  styleUrls: ['./admin-landingpage.css']
})
export class AdminLandingPageComponent {
  @Output() navigateTo = new EventEmitter<string>();
  
  goToDashboard() {
    this.navigateTo.emit('admin-dashboard');
  }

  logout() {
    alert('Admin logged out');
    this.navigateTo.emit('admin-login');
  }
}
