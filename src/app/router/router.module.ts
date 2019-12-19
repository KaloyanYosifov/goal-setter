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
import { TodoGuardService } from '@app/todos/guards/todo-guard.service';
import { TodoEditComponent } from '@app/todos/todo-edit/todo-edit.component';
import { TodoResolverService } from '@app/todos/resolvers/todo-resolver.service';
import { TodoCreateComponent } from '@app/todos/todo-create/todo-create.component';
import { HobbyCreateComponent } from '@app/hobbies/hobby-create/hobby-create.component';

const todosRoutes = [
    {
        path: 'todos',
        component: TodosComponent,
    },
    {
        path: 'todos/create',
        component: TodoCreateComponent,
    },
    {
        path: 'todos/:id/edit',
        component: TodoEditComponent,
        canActivate: [TodoGuardService],
        resolve: {
            todo: TodoResolverService,
        },
    },
    {
        path: 'todos/:id',
        component: TodoViewComponent,
        canActivate: [TodoGuardService],
        resolve: {
            todo: TodoResolverService,
        },
    },
];

const hobbiesRoutes = [
    {
        path: 'hobbies/create',
        component: HobbyCreateComponent,
    },
];

const routes: Routes = [
    ...todosRoutes,
    ...hobbiesRoutes,
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
