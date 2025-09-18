import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-landing.html',
  styleUrls: ['./user-landing.css']
})
export class UserLandingComponent {
  @Output() navigateTo = new EventEmitter<string>();
  
  goToDashboard() {
    this.navigateTo.emit('user-dashboard');
  }
  
  goToLogin() {
    this.navigateTo.emit('user-login');
  }
}
