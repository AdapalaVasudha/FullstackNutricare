import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-glucoselog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-glucoselog.html',
  styleUrls: ['./manage-glucoselog.css']
})
export class ManageGlucoseLogComponent {
  glucoseLogs = [
    { id: 1, user: 'John Doe', date: '2025-09-15', time: '08:30', level: 120 },
    { id: 2, user: 'Jane Smith', date: '2025-09-15', time: '12:00', level: 160 },
    { id: 3, user: 'Mike Johnson', date: '2025-09-15', time: '19:00', level: 135 }
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
      const index = this.glucoseLogs.findIndex(l => l.id === this.selectedLog.id);
      if (index !== -1) {
        this.glucoseLogs[index] = { ...this.selectedLog };
      }
    } else {
      this.selectedLog.id = this.glucoseLogs.length + 1;
      this.glucoseLogs.push({ ...this.selectedLog });
    }
    this.closeModal();
  }

  deleteLog(id: number) {
    this.glucoseLogs = this.glucoseLogs.filter(l => l.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }
}
