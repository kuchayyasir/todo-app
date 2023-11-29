import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css',
  standalone:true,
  imports: [CommonModule,FormsModule],
  providers: [TaskService],
})
export class TasklistComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTask);
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  markAsDone(id: number) {
    this.taskService.markAsDone(id);
  }
}
