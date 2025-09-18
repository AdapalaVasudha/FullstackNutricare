import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-navbar.html',
  styleUrls: ['./user-navbar.css']
})
export class UserNavbarComponent {
  navigateTo(path: string) {
    window.location.href = path;
  }
  
  logout() {
    // Clear user session if needed
    alert('Logged out successfully');
    window.location.href = '/user/login';
  }
}
