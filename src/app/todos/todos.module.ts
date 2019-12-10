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

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [
    CommonModule,
  ],
  exports: [TodosComponent],
})
export class TodosModule {
}
