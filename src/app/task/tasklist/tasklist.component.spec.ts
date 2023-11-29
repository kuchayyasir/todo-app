import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasklistComponent } from './tasklist.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

describe('TasklistComponent', () => {
  let component: TasklistComponent;
  let fixture: ComponentFixture<TasklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [CommonModule,FormsModule],
      providers: [TaskService] 
    });

    fixture = TestBed.createComponent(TasklistComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a task', () => {
    const initialTaskCount = component.tasks.length;
    component.newTask = 'Test Task';
    component.addTask();
    expect(component.tasks.length).toBe(initialTaskCount + 1);
  });

  it('should delete a task', () => {
    const taskId = 1;
    const initialTaskCount = component.tasks.length;
    component.deleteTask(taskId);
    expect(component.tasks.length).toBe(initialTaskCount - 1);
  });

  it('should mark a task as done', () => {
    const taskId = 1;
    component.tasks
    component.markAsDone(taskId);
    expect(component.tasks[0].done).toBe(true);
  });
});

