import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboardComponent {
  userName = 'Vasudha';

  // Sample Stats
  mealsToday = 3;
  latestGlucose = 112;

  dietPlans = [
    { title: 'Low Carb Plan' },
    { title: 'High Protein Plan' }
  ];

  // Chart Data
  glucoseChartData = [110, 115, 112, 118, 120];
  glucoseChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  mealChartData = [40, 35, 25];
  mealChartLabels = ['Breakfast', 'Lunch', 'Dinner'];
}
