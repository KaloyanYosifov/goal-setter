/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal dependencies.
 */
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
    ],
  exports: [
    HeaderComponent,
  ],
})
export class EssentialsModule {
}
