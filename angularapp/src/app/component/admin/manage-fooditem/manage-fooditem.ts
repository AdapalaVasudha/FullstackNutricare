import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-fooditem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-fooditem.html',
  styleUrls: ['./manage-fooditem.css']
})
export class ManageFoodItemComponent {
  foodItems = [
    { id: 1, name: 'Brown Rice', calories: 220, carbs: 45, protein: 5, fats: 2 },
    { id: 2, name: 'Oats', calories: 150, carbs: 27, protein: 6, fats: 3 },
    { id: 3, name: 'Apple', calories: 95, carbs: 25, protein: 0.5, fats: 0.3 }
  ];

  showModal = false;
  editingFood = false;
  selectedFood: any = {};

  openAddFood() {
    this.editingFood = false;
    this.selectedFood = {};
    this.showModal = true;
  }

  editFood(food: any) {
    this.editingFood = true;
    this.selectedFood = { ...food };
    this.showModal = true;
  }

  saveFood() {
    if (this.editingFood) {
      const index = this.foodItems.findIndex(f => f.id === this.selectedFood.id);
      if (index !== -1) {
        this.foodItems[index] = { ...this.selectedFood };
      }
    } else {
      this.selectedFood.id = this.foodItems.length + 1;
      this.foodItems.push({ ...this.selectedFood });
    }
    this.closeModal();
  }

  deleteFood(id: number) {
    this.foodItems = this.foodItems.filter(f => f.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }
}
