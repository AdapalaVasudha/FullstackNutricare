import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar';

interface FoodItem {
  name: string;
  calories: number;
  carbs: number;
  protein: number;
  fats: number;
}

@Component({
  selector: 'app-fooditems',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent],
  templateUrl: './fooditem.html',
  styleUrls: ['./fooditem.css']
})
export class FooditemsComponent {
  foodItems: FoodItem[] = [
    { name: 'Oats', calories: 150, carbs: 27, protein: 5, fats: 3 },
    { name: 'Brown Rice', calories: 215, carbs: 45, protein: 5, fats: 2 },
    { name: 'Chicken Breast', calories: 165, carbs: 0, protein: 31, fats: 4 },
    { name: 'Broccoli', calories: 55, carbs: 11, protein: 4, fats: 0.5 },
    { name: 'Almonds', calories: 160, carbs: 6, protein: 6, fats: 14 }
  ];

  addFoodItem() {
    alert('Functionality to add a new food item will be implemented here.');
  }
}
