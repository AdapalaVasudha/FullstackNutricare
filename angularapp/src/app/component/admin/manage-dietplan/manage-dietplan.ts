import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-dietplan',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-dietplan.html',
  styleUrls: ['./manage-dietplan.css']
})
export class ManageDietPlanComponent {
  dietPlans = [
    { id: 1, name: 'Low Carb Plan', diabetesType: 'Type 2', calories: 1800, description: 'Focus on reducing carb intake with lean proteins and vegetables.' },
    { id: 2, name: 'Balanced Plan', diabetesType: 'Type 1', calories: 2000, description: 'Balanced intake of carbs, protein, and healthy fats.' },
    { id: 3, name: 'Gestational Plan', diabetesType: 'Gestational', calories: 2200, description: 'Nutrient-rich meals tailored for gestational diabetes.' }
  ];

  showModal = false;
  editingPlan = false;
  selectedPlan: any = {};

  openAddPlan() {
    this.editingPlan = false;
    this.selectedPlan = {};
    this.showModal = true;
  }

  editPlan(plan: any) {
    this.editingPlan = true;
    this.selectedPlan = { ...plan };
    this.showModal = true;
  }

  savePlan() {
    if (this.editingPlan) {
      const index = this.dietPlans.findIndex(p => p.id === this.selectedPlan.id);
      if (index !== -1) {
        this.dietPlans[index] = { ...this.selectedPlan };
      }
    } else {
      this.selectedPlan.id = this.dietPlans.length + 1;
      this.dietPlans.push({ ...this.selectedPlan });
    }
    this.closeModal();
  }

  deletePlan(id: number) {
    this.dietPlans = this.dietPlans.filter(p => p.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }
}
