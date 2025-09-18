import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-user.html',
  styleUrls: ['./manage-user.css']
})
export class ManageUserComponent {
  users = [
    { id: 1, name: 'John Doe', phone: '9876543210', email: 'john@example.com', diabetesType: 'Type 2', weight: 75, height: 170, activityLevel: 'Moderate', password: '' },
    { id: 2, name: 'Jane Smith', phone: '9876501234', email: 'jane@example.com', diabetesType: 'Type 1', weight: 65, height: 160, activityLevel: 'Low', password: '' }
  ];

  showModal = false;
  editingUser = false;
  selectedUser: any = {};

  openAddUser() {
    this.editingUser = false;
    this.selectedUser = {};
    this.showModal = true;
  }

  editUser(user: any) {
    this.editingUser = true;
    this.selectedUser = { ...user };
    this.showModal = true;
  }

  saveUser() {
    if (this.editingUser) {
      const index = this.users.findIndex(u => u.id === this.selectedUser.id);
      if (index !== -1) {
        this.users[index] = { ...this.selectedUser };
      }
    } else {
      this.selectedUser.id = this.users.length + 1;
      this.users.push({ ...this.selectedUser });
    }
    this.closeModal();
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }

  closeModal() {
    this.showModal = false;
  }
}
