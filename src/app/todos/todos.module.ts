/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal dependencies.
 */
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { RouterModule } from '@angular/router';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [TodosComponent, TodoComponent, TodoViewComponent, TodoEditComponent, TodoFormComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
  exports: [TodosComponent],
})
export class TodosModule {
}
