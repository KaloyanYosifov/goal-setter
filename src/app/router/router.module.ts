/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { RouterModule as AngularRouterModule, Routes } from '@angular/router';

/**
 * Internal dependencies.
 */
import { TodosComponent } from '../pages/todos/todos.component';
import { TodoViewComponent } from '@app/todos/todo-view/todo-view.component';
import { TodoGuardService } from '@app/guards/todo-guard.service';

const routes: Routes = [
    {
        path: 'todos',
        component: TodosComponent,
    },
    {
        path: 'todos/:id',
        component: TodoViewComponent,
        canActivate: [TodoGuardService],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/todos',
    },
];

@NgModule({
    declarations: [],
    imports: [
        AngularRouterModule.forRoot(routes),
    ],
    providers: [
        TodoGuardService,
    ],
    exports: [
        AngularRouterModule,
    ],
})
export class RouterModule {
}
