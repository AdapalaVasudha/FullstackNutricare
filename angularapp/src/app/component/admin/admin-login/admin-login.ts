import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.html',
  styleUrls: ['./admin-login.css']
})
export class AdminLoginComponent {
  
  isLoginMode: boolean = true;

  loginData = {
    email: '',
    password: ''
  };

  signupData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    diabetesType: 'Type 2',
    weight: 0,
    height: 0,
    activityLevel: 'Moderate'
  };

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin() {
    console.log('Login Data:', this.loginData);
    // TODO: Call backend login API
    if (this.loginData.email && this.loginData.password) {
      alert('Login successful');
      window.location.href = '/admin/landingpage';
    } else {
      alert('Please fill in all fields');
    }
  }

  onSignup() {
    console.log('Signup Data:', this.signupData);
    // TODO: Call backend signup API
    if (
      this.signupData.name &&
      this.signupData.phone &&
      this.signupData.email &&
      this.signupData.password
    ) {
      alert('Signup successful. Please login.');
      this.isLoginMode = true;
    } else {
      alert('Please fill in all fields');
    }
  }
}
