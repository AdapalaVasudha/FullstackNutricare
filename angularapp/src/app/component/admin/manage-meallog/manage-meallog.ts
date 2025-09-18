import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-meallog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-meallog.html',
  styleUrls: ['./manage-meallog.css']
})
export class ManageMealLogComponent {
  mealLogs = [
    { id: 1, user: 'John Doe', meal: 'Oats with Milk', date: '2025-09-15', time: '08:00', calories: 250 },
    { id: 2, user: 'Jane Smith', meal: 'Grilled Chicken Salad', date: '2025-09-15', time: '12:30', calories: 400 },
    { id: 3, user: 'Mike Johnson', meal: 'Brown Rice & Veggies', date: '2025-09-15', time: '19:00', calories: 500 }
  ];

  showModal = false;
  editingLog = false;
  selectedLog: any = {};

  openAddLog() {
    this.editingLog = false;
    this.selectedLog = {};
    this.showModal = true;
  }

  editLog(log: any) {
    this.editingLog = true;
    this.selectedLog = { ...log };
    this.showModal = true;
  }

  saveLog() {
    if (this.editingLog) {
      const index = this.mealLogs.findIndex(l => l.id === this.selectedLog.id);
      if (index !== -1) {
        this.mealLogs[index] = { ...this.selectedLog };
      }
    } else {
      this.selectedLog.id = this.mealLogs.length + 1;
      this.mealLogs.push({ ...this.selectedLog });
    }
    this.closeModal();
  }

  deleteLog(id: number) {
    this.mealLogs = this.mealLogs.filter(l => l.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }
}
