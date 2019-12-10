/**
 * External dependencies.
 */
import { RouterModule, Routes } from '@angular/router';

/**
 * Internal dependencies.
 */
import { TodosComponent } from '../pages/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

export const Router = RouterModule.forRoot(routes);
