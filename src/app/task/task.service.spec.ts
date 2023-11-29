import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial tasks', () => {
    const tasks = service.getTasks();
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should add a task', () => {
    const initialTaskCount = service.getTasks().length;
    service.addTask('New Task');
    const tasks = service.getTasks();
    expect(tasks.length).toBe(initialTaskCount + 1);
    expect(tasks[tasks.length - 1].title).toBe('New Task');
  });

  it('should delete a task', () => {
    const taskId = service.getTasks()[0].id;
    const initialTaskCount = service.getTasks().length;
    service.deleteTask(taskId);
    const tasks = service.getTasks();
    expect(tasks.length).toBe(initialTaskCount - 1);
    expect(tasks.some(task => task.id === taskId)).toBe(false);
  });

  it('should mark a task as done', () => {
    const taskId = service.getTasks()[0].id;
    service.markAsDone(taskId);
    const task = service.getTasks().find(t => t.id === taskId);
    expect(task?.done).toBe(true);
  });
});
