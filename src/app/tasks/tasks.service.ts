import { Injectable } from '@angular/core';
import { type NewData } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 'task 1',
      userId: 'u1',
      title: 'learning Angular',
      summary: 'build something?',
      dueDate: '2025-12-31',
    },
    {
      id: 'task 2',
      userId: 'u6',
      title: 'learning TypeScript',
      summary: 'build something?',
      dueDate: '2025-12-31',
    },
    {
      id: 'task 3',
      userId: 'u6',
      title: 'learning japanese',
      summary: 'watching something?',
      dueDate: '2025-12-31',
    },
    {
      id: 'task 4',
      userId: 'u5',
      title: 'learning Java',
      summary: 'build something?',
      dueDate: '2025-12-31',
    },
    {
      id: 'task 5',
      userId: 'u2',
      title: 'learning React',
      summary: 'build something?',
      dueDate: '2025-12-31',
    },
    {
      id: 'task 6',
      userId: 'u3',
      title: 'learning manor',
      summary: 'build something?',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('items');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addData(taskData: NewData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('takes', JSON.stringify(this.tasks));
  }
}
