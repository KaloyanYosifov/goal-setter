/**
 * External dependencies.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Internal dependencies.
 */
import { TodosComponent } from './todos.component';
import { TodoComponent } from './todo/todo.component';
import { TodoViewComponent } from './todo-view/todo-view.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoResolverService } from '@app/todos/resolvers/todo-resolver.service';
import { TodoGuardService } from '@app/todos/guards/todo-guard.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [TodosComponent, TodoComponent, TodoViewComponent, TodoEditComponent, TodoFormComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
    ],
    providers: [
        TodoGuardService,
        TodoResolverService,
    ],
    exports: [TodosComponent],
})
export class TodosModule {
}
