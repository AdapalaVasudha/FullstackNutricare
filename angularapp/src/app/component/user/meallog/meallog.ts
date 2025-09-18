import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar';

interface MealLog {
  mealName: string;
  type: string;
  calories: number;
  date: string;
  time: string;
}

@Component({
  selector: 'app-meallog',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent],
  templateUrl: './meallog.html',
  styleUrls: ['./meallog.css']
})
export class MeallogComponent {
  mealLogs: MealLog[] = [
    {
      mealName: 'Omelette with Veggies',
      type: 'Breakfast',
      calories: 250,
      date: '2025-09-17',
      time: '08:00 AM'
    },
    {
      mealName: 'Grilled Chicken Salad',
      type: 'Lunch',
      calories: 350,
      date: '2025-09-17',
      time: '01:00 PM'
    },
    {
      mealName: 'Quinoa and Veggies',
      type: 'Dinner',
      calories: 300,
      date: '2025-09-16',
      time: '07:30 PM'
    }
  ];

  addMealLog() {
    alert('Functionality to add a new meal log will be implemented here.');
  }
}
