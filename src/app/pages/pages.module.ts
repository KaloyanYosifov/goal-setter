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
import { EssentialsModule } from '@app/essentials/essentials.module';

@NgModule({
  declarations: [
    PagesComponent,
    TodosComponent,
  ],
  imports: [
    CommonModule,
    Router,
    TodosModule,
    EssentialsModule,
  ],
  exports: [PagesComponent],
})
export class PagesModule {
}
