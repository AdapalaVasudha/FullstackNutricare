import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from '../user-navbar/user-navbar';

interface GlucoseLog {
  level: number;
  date: string;
  time: string;
  notes: string;
}

@Component({
  selector: 'app-glucoselog',
  standalone: true,
  imports: [CommonModule, UserNavbarComponent],
  templateUrl: './glucoselog.html',
  styleUrls: ['./glucoselog.css']
})
export class GlucoselogComponent {
  glucoseLogs: GlucoseLog[] = [
    { level: 120, date: '2025-09-17', time: '08:00 AM', notes: 'Fasting' },
    { level: 145, date: '2025-09-17', time: '01:00 PM', notes: 'After lunch' },
    { level: 110, date: '2025-09-16', time: '07:30 PM', notes: 'Before dinner' },
  ];

  addGlucoseLog() {
    alert('Functionality to add a new glucose reading will be implemented here.');
  }
}
