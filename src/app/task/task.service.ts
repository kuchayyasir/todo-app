import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  constructor(){
    this.tasks.push({ id: 1, title: 'Sample Task 1', done: false });
    this.tasks.push({ id:  Date.now(), title: 'Sample Task 2', done: true });
  
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: string): void {
    if (newTask.trim() !== '') {
      const task: Task = {
        id: Date.now(),
        title: newTask.trim(),
        done: false
      };
      this.tasks.push(task);
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  markAsDone(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.done = true;
    }

    }
}
