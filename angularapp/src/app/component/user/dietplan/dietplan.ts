import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserNavbarComponent } from '../user-navbar/user-navbar';

interface Meal {
  name: string;
  details: string;
  calories: number;
}

interface DietPlan {
  title: string;
  diabeticType: string;
  description: string;
  meals: Meal[];
  tips: string[];
}

@Component({
  selector: 'app-dietplans',
  standalone: true,
  imports: [CommonModule, FormsModule, UserNavbarComponent],
  templateUrl: './dietplan.html',
  styleUrls: ['./dietplan.css']
})
export class DietplansComponent {
  diabeticTypes = ['Type 1', 'Type 2', 'Gestational', 'Prediabetes'];
  selectedType = 'Type 1';

  dietPlans: DietPlan[] = [
    {
      title: 'Low Carb Breakfast Plan',
      diabeticType: 'Type 1',
      description: 'Focus on low carb intake in the morning to maintain stable glucose.',
      meals: [
        { name: 'Omelette', details: 'Eggs, spinach, tomatoes', calories: 250 },
        { name: 'Green Tea', details: 'Unsweetened', calories: 0 }
      ],
      tips: ['Drink plenty of water', 'Avoid sugary cereals']
    },
    {
      title: 'Balanced Lunch Plan',
      diabeticType: 'Type 2',
      description: 'Balanced protein, carbs, and fats for Type 2 diabetic patients.',
      meals: [
        { name: 'Grilled Chicken Salad', details: 'Chicken breast, veggies, olive oil', calories: 350 },
        { name: 'Quinoa', details: 'Cooked with herbs', calories: 150 }
      ],
      tips: ['Include fiber-rich vegetables', 'Monitor portion size']
    },
    {
      title: 'Gestational Care Plan',
      diabeticType: 'Gestational',
      description: 'Meal plan for expecting mothers with diabetes.',
      meals: [
        { name: 'Oatmeal with Berries', details: 'Oats, almond milk, berries', calories: 200 },
        { name: 'Boiled Eggs', details: '2 eggs', calories: 140 }
      ],
      tips: ['Eat small frequent meals', 'Monitor glucose after meals']
    }
  ];

  filteredDietPlans(): DietPlan[] {
    return this.dietPlans.filter(plan => plan.diabeticType === this.selectedType);
  }
}
