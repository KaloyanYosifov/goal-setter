/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal dependencies.
 */
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
  ],
  exports: [TodosComponent],
})
export class TodosModule {
}
