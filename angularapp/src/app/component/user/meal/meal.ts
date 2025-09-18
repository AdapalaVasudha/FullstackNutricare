import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar';

interface Meal {
  name: string;
  type: string;
  ingredients: string;
  calories: number;
  description: string;
}

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent],
  templateUrl: './meal.html',
  styleUrls: ['./meal.css']
})
export class MealsComponent {
  meals: Meal[] = [
    {
      name: 'Omelette with Veggies',
      type: 'Breakfast',
      ingredients: 'Eggs, Spinach, Tomato, Onion',
      calories: 250,
      description: 'Low carb breakfast to maintain stable glucose levels.'
    },
    {
      name: 'Grilled Chicken Salad',
      type: 'Lunch',
      ingredients: 'Chicken Breast, Lettuce, Olive Oil, Cucumber',
      calories: 350,
      description: 'High protein, balanced lunch for Type 2 diabetic patients.'
    },
    {
      name: 'Oatmeal with Berries',
      type: 'Breakfast',
      ingredients: 'Oats, Almond Milk, Berries',
      calories: 200,
      description: 'Healthy breakfast for gestational diabetes.'
    },
    {
      name: 'Quinoa and Veggies',
      type: 'Dinner',
      ingredients: 'Quinoa, Broccoli, Carrots, Olive Oil',
      calories: 300,
      description: 'Low glycemic dinner to support stable glucose.'
    }
  ];

  addMeal() {
    alert('Functionality to add a new meal will be implemented here.');
  }
}
