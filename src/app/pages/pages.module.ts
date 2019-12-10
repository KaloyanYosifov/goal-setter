/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal dependencies.
 */
import { Router } from '../router';
import { PagesComponent } from './pages.component';
import { TodosModule } from '@app/todos/todos.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    PagesComponent,
    TodosComponent,
  ],
  imports: [
    CommonModule,
    Router,
    TodosModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {
}
