/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal dependencies.
 */
import { Router } from '../router';
import { PagesComponent } from './pages/pages.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    PagesComponent,
    TodosComponent,
  ],
  imports: [
    CommonModule,
    Router,
  ],
  exports: [PagesComponent],
})
export class PagesModule {
}
