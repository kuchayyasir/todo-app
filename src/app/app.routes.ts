import { Routes } from '@angular/router';
import { TasklistComponent } from './task/tasklist/tasklist.component';

export const routes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasklistComponent },
];
