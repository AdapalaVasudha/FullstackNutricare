import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css']
})
export class UserLoginComponent {
  
  showSignup = false;

  // Login Fields
  loginEmail = '';
  loginPassword = '';

  // Signup Fields
  signupName = '';
  signupPhone = '';
  signupEmail = '';
  signupPassword = '';
  signupWeight: number | null = null;
  signupHeight: number | null = null;
  signupDiabeticType = '';
  signupActivityLevel = '';

  loginUser() {
    // Placeholder logic
    alert(`Logged in as ${this.loginEmail}`);
    window.location.href = '/user/dashboard';
  }

  signupUser() {
    // Placeholder logic
    alert(`Account created for ${this.signupName}`);
    this.showSignup = false;
    window.location.href = '/user/dashboard';
  }
}
