export interface Task {
    id: number;
    title: string;
    priority: 'High' | 'Medium' | 'Low';
    dueDate: string; // or moment.Moment if using moment.js
    status: boolean; // true for completed, false for not completed
  }
  