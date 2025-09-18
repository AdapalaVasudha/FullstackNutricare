import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLandingComponent } from './component/user/user-landing/user-landing';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard';
import { AdminLandingPageComponent } from './component/admin/admin-landingpage/admin-landingpage';
import { UserLoginComponent } from './component/user/user-login/user-login';
import { UserDashboardComponent } from './component/user/user-dashboard/user-dashboard';
import { DietplansComponent } from './component/user/dietplan/dietplan';
import { MealsComponent } from './component/user/meal/meal';
import { MeallogComponent } from './component/user/meallog/meallog';
import { GlucoselogComponent } from './component/user/glucoselog/glucoselog';
import { FooditemsComponent } from './component/user/fooditem/fooditem';
import { ManageUserComponent } from './component/admin/manage-user/manage-user';
import { ManageMealComponent } from './component/admin/manage-meals/manage-meals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    UserLandingComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminLandingPageComponent,
    UserLoginComponent,
    UserDashboardComponent,
    DietplansComponent,
    MealsComponent,
    MeallogComponent,
    GlucoselogComponent,
    FooditemsComponent,
    ManageUserComponent,
    ManageMealComponent
  ],
  template: `
    <div class="app-container">
      <!-- Main Landing Page -->
      <div *ngIf="currentPage === 'main-landing'" class="main-landing">
        <div class="hero-section">
          <h1>Welcome to NutriCare</h1>
          <p>Your personalized diabetic care companion</p>
          <div class="user-type-selection">
            <div class="user-card" (click)="enterUserSection()">
              <h2>👤 User Portal</h2>
              <p>Track your meals, glucose levels, and follow your diet plans</p>
              <button class="user-btn">Enter as User</button>
            </div>
            <div class="admin-card" (click)="enterAdminSection()">
              <h2>👩‍⚕️ Admin Portal</h2>
              <p>Manage users, diet plans, and monitor health data</p>
              <button class="admin-btn">Enter as Admin</button>
            </div>
          </div>
        </div>
      </div>

      <!-- User Section -->
      <div *ngIf="currentSection === 'user'" class="user-section">
        <!-- User Navigation -->
        <nav class="nav-bar user-nav">
          <div class="nav-brand">
            <h2>NutriCare - User Portal</h2>
          </div>
          <div class="nav-links">
            <button (click)="showPage('user-landing')" [class.active]="currentPage === 'user-landing'">Home</button>
            <button (click)="showPage('user-login')" [class.active]="currentPage === 'user-login'">Login</button>
            <button (click)="showPage('user-dashboard')" [class.active]="currentPage === 'user-dashboard'">Dashboard</button>
            <button (click)="showPage('dietplans')" [class.active]="currentPage === 'dietplans'">Diet Plans</button>
            <button (click)="showPage('meals')" [class.active]="currentPage === 'meals'">Meals</button>
            <button (click)="showPage('meallog')" [class.active]="currentPage === 'meallog'">Meal Logs</button>
            <button (click)="showPage('glucoselog')" [class.active]="currentPage === 'glucoselog'">Glucose Logs</button>
            <button (click)="showPage('fooditems')" [class.active]="currentPage === 'fooditems'">Food Items</button>
            <button (click)="backToMain()" class="back-btn">← Back to Main</button>
          </div>
        </nav>

        <!-- User Content -->
        <div class="content-area">
          <app-user-landing *ngIf="currentPage === 'user-landing'" (navigateTo)="showPage($event)"></app-user-landing>
          <app-user-login *ngIf="currentPage === 'user-login'"></app-user-login>
          <app-user-dashboard *ngIf="currentPage === 'user-dashboard'"></app-user-dashboard>
          <app-dietplans *ngIf="currentPage === 'dietplans'"></app-dietplans>
          <app-meals *ngIf="currentPage === 'meals'"></app-meals>
          <app-meallog *ngIf="currentPage === 'meallog'"></app-meallog>
          <app-glucoselog *ngIf="currentPage === 'glucoselog'"></app-glucoselog>
          <app-fooditems *ngIf="currentPage === 'fooditems'"></app-fooditems>
        </div>
      </div>

      <!-- Admin Section -->
      <div *ngIf="currentSection === 'admin'" class="admin-section">
        <!-- Admin Navigation -->
        <nav class="nav-bar admin-nav">
          <div class="nav-brand">
            <h2>NutriCare - Admin Portal</h2>
          </div>
          <div class="nav-links">
            <button (click)="showPage('admin-landing')" [class.active]="currentPage === 'admin-landing'">Home</button>
            <button (click)="showPage('admin-login')" [class.active]="currentPage === 'admin-login'">Login</button>
            <button (click)="showPage('admin-dashboard')" [class.active]="currentPage === 'admin-dashboard'">Dashboard</button>
            <button (click)="showPage('manage-users')" [class.active]="currentPage === 'manage-users'">Manage Users</button>
            <button (click)="showPage('manage-meals')" [class.active]="currentPage === 'manage-meals'">Manage Meals</button>
            <button (click)="backToMain()" class="back-btn">← Back to Main</button>
          </div>
        </nav>

        <!-- Admin Content -->
        <div class="content-area">
          <app-admin-landingpage *ngIf="currentPage === 'admin-landing'" (navigateTo)="showPage($event)"></app-admin-landingpage>
          <app-admin-login *ngIf="currentPage === 'admin-login'"></app-admin-login>
          <app-admin-dashboard *ngIf="currentPage === 'admin-dashboard'"></app-admin-dashboard>
          <app-manage-user *ngIf="currentPage === 'manage-users'"></app-manage-user>
          <app-manage-meal *ngIf="currentPage === 'manage-meals'"></app-manage-meal>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'NutriFrontend';
  currentPage = 'main-landing';
  currentSection = '';

  showPage(page: string) {
    this.currentPage = page;
  }

  enterUserSection() {
    this.currentSection = 'user';
    this.currentPage = 'user-landing';
  }

  enterAdminSection() {
    this.currentSection = 'admin';
    this.currentPage = 'admin-landing';
  }

  backToMain() {
    this.currentSection = '';
    this.currentPage = 'main-landing';
  }
}
