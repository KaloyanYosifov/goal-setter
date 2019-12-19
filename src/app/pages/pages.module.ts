/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Internal dependencies.
 */
import { PagesComponent } from './pages.component';
import { TodosModule } from '@app/todos/todos.module';
import { TodosComponent } from './todos/todos.component';
import { EssentialsModule } from '@app/essentials/essentials.module';
import { TodoGuardService } from '@app/todos/guards/todo-guard.service';
import { RouterModule } from '@app/router/router.module';
import { HobbyModule } from '@app/hobbies/hobby/hobby.module';

@NgModule({
    declarations: [
        PagesComponent,
        TodosComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TodosModule,
        HobbyModule,
        EssentialsModule,
    ],
    providers: [
        TodoGuardService,
    ],
    exports: [PagesComponent],
})
export class PagesModule {
}
