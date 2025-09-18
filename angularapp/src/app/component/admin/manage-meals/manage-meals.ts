import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-meal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-meal.html',
  styleUrls: ['./manage-meal.css']
})
export class ManageMealComponent {
  meals = [
    { id: 1, name: 'Oats with Milk', type: 'Breakfast', calories: 250, description: 'Healthy oats with low-fat milk.' },
    { id: 2, name: 'Grilled Chicken Salad', type: 'Lunch', calories: 400, description: 'Lean chicken with vegetables.' },
    { id: 3, name: 'Brown Rice with Veggies', type: 'Dinner', calories: 500, description: 'Brown rice with mixed veggies.' }
  ];

  showModal = false;
  editingMeal = false;
  selectedMeal: any = {};

  openAddMeal() {
    this.editingMeal = false;
    this.selectedMeal = {};
    this.showModal = true;
  }

  editMeal(meal: any) {
    this.editingMeal = true;
    this.selectedMeal = { ...meal };
    this.showModal = true;
  }

  saveMeal() {
    if (this.editingMeal) {
      const index = this.meals.findIndex(m => m.id === this.selectedMeal.id);
      if (index !== -1) {
        this.meals[index] = { ...this.selectedMeal };
      }
    } else {
      this.selectedMeal.id = this.meals.length + 1;
      this.meals.push({ ...this.selectedMeal });
    }
    this.closeModal();
  }

  deleteMeal(id: number) {
    this.meals = this.meals.filter(m => m.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }
}
