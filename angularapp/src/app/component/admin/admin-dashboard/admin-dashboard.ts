import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent {
  activeSection: string = 'overview';

  // Sample data for demo
  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
  ];

  meals = [
    { id: 1, name: 'Oats with Milk', type: 'Breakfast' },
    { id: 2, name: 'Grilled Chicken Salad', type: 'Lunch' }
  ];

  mealLogs = [
    { user: 'John Doe', meal: 'Oats with Milk', time: '08:00 AM' }
  ];

  foodItems = [
    { name: 'Oats', calories: 150 },
    { name: 'Chicken Breast', calories: 200 }
  ];

  glucoseLogs = [
    { user: 'Jane Smith', level: 110, date: '2025-09-17' }
  ];

  dietPlans = [
    { title: 'Low Carb Plan', description: 'Focus on reducing carbs and sugar.' }
  ];

  // Charts placeholders
  glucoseChartData = [100, 120, 115];
  glucoseChartLabels = ['Mon', 'Tue', 'Wed'];
  mealChartData = [30, 50, 20];
  mealChartLabels = ['Breakfast', 'Lunch', 'Dinner'];
  dietChartData = [5, 3, 7];
  dietChartLabels = ['Plan A', 'Plan B', 'Plan C'];

  // Sidebar section switch
  setActive(section: string) {
    this.activeSection = section;
  }

  // Dummy actions
  logout() {
    alert('Logged out!');
    // implement real logout here
  }

  viewUser(user: any) {
    alert(`Viewing ${user.name}`);
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }

  addMeal() {
    alert('Add Meal clicked');
  }

  addFood() {
    alert('Add Food clicked');
  }

  createPlan() {
    alert('Create Diet Plan clicked');
  }

  viewSignups() {
    alert('Viewing signups');
  }
}
